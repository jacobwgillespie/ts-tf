import {asCode, ObjectProperties, ObjectType, T, validateOrThrow} from '@infrascript/type-system'
import {StringKeyOf} from '@infrascript/types'
import execa from 'execa'
import {tfplugin5} from '../generated/client'
import {throwDiagnosticErrors} from './errors'
import {newRPC} from './rpc'
import {
  fromDynamic,
  optionalsToNulls,
  tfSchemasRecordToSchemaTypeRecord,
  tfSchemaToSchemaType,
  toDynamic,
} from './types'

export interface Options {
  /** If true, the provider's debug messages will be printed on stderr */
  debug?: boolean
}

interface Internals {
  dataSourceSchemas: Record<string, ObjectType<ObjectProperties>>
  providerSchema: ObjectType<ObjectProperties>
  resourceSchemas: Record<string, ObjectType<ObjectProperties>>
  rpc: tfplugin5.Provider
  subprocess: execa.ExecaChildProcess
}

export interface ProviderConfigType {
  dataSourceSchemas: Record<string, object>
  providerSchema: object
  resourceSchemas: Record<string, object>
}

export class Provider<
  ProviderConfig extends ProviderConfigType = {dataSourceSchemas: {}; providerSchema: {}; resourceSchemas: {}}
> {
  #internals: Internals
  constructor(internals: Internals) {
    this.#internals = internals
  }

  get dataSourceSchemas(): Record<string, ObjectType<ObjectProperties>> {
    return this.#internals.dataSourceSchemas
  }

  get providerSchema(): ObjectType<ObjectProperties> {
    return this.#internals.providerSchema
  }

  get resourceSchemas(): Record<string, ObjectType<ObjectProperties>> {
    return this.#internals.resourceSchemas
  }

  async configure(config: ProviderConfig['providerSchema']): Promise<tfplugin5.Configure.Response> {
    validateOrThrow(this.#internals.providerSchema, config)

    const {preparedConfig}: tfplugin5.PrepareProviderConfig.Response = await this.#internals.rpc
      .prepareProviderConfig({config: toDynamic(optionalsToNulls(config, this.#internals.providerSchema))})
      .then(throwDiagnosticErrors)

    if (!preparedConfig) {
      throw new Error('Unable to prepare provider config')
    }

    return await this.#internals.rpc.configure({config: preparedConfig}).then(throwDiagnosticErrors)
  }

  async readDataSource<Name extends StringKeyOf<ProviderConfig['dataSourceSchemas']>, State extends object>(
    typeName: Name,
    config: ProviderConfig['dataSourceSchemas'][Name],
  ): Promise<State> {
    const dataSourceSchema: ObjectType<ObjectProperties> | undefined = this.#internals.dataSourceSchemas[typeName]

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (dataSourceSchema === undefined) throw new TypeError(`Invalid data source type ${typeName}`)

    validateOrThrow(dataSourceSchema, config)

    const dynamicConfig = toDynamic(optionalsToNulls(config, dataSourceSchema))
    const res = await this.#internals.rpc.readDataSource({typeName, config: dynamicConfig}).then(throwDiagnosticErrors)
    const state = fromDynamic<State>(res.state)
    if (!state) {
      throw new Error('Unable to read state from data source')
    }
    return state
  }

  async shutdown(signal?: NodeJS.Signals | number): Promise<boolean> {
    return this.#internals.subprocess.kill(signal)
  }
}

export function createProviderFactory<ProviderConfig extends ProviderConfigType>(): (
  binary: string,
  opts?: Options,
) => Promise<Provider<ProviderConfig>> {
  return async (binary: string, opts: Options = {}) => {
    const {subprocess, rpc} = await newRPC(binary, opts)

    const schema = await rpc.getSchema({})
    if (!schema.provider || !schema.provider.block) {
      throw new Error('Unable to read provider schema')
    }

    const providerSchema = tfSchemaToSchemaType(schema.provider)
    const dataSourceSchemas = tfSchemasRecordToSchemaTypeRecord(schema.dataSourceSchemas)
    const resourceSchemas = tfSchemasRecordToSchemaTypeRecord(schema.resourceSchemas)

    return new Provider<ProviderConfig>({
      dataSourceSchemas,
      subprocess,
      rpc,
      providerSchema,
      resourceSchemas,
    })
  }
}

export const createProvider = createProviderFactory()

export function codegen(provider: Provider): string {
  const providerConfig = asCode(
    T.object({
      providerSchema: provider.providerSchema,
      dataSourceSchemas: T.object(provider.dataSourceSchemas),
      resourceSchemas: T.object(provider.resourceSchemas),
    }),
  )

  return `import {Provider} from '@infrascript/terraform-provider-client'

interface ProviderConfig extends ProviderConfigType ${providerConfig}

export const createProvider = createProviderFactory<ProviderConfig>()
`
}
