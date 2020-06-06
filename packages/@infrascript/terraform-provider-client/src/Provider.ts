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
  Kind,
} from './types'

export interface Options {
  /** If true, the provider's debug messages will be printed on stderr */
  debug?: boolean
}

interface Internals {
  rpc: tfplugin5.Provider
  subprocess: execa.ExecaChildProcess
  schema: tfplugin5.GetProviderSchema.Response
}

export interface ProviderConfigType {
  providerSchema: object
  dataSourceSchemas: Record<string, object>
  resourceSchemas: Record<string, object>
  dataSourceStateSchemas: Record<string, object>
  resourceStateSchemas: Record<string, object>
}

export class Provider<
  ProviderConfig extends ProviderConfigType = {
    dataSourceSchemas: {}
    providerSchema: {}
    resourceSchemas: {}
    dataSourceStateSchemas: {}
    resourceStateSchemas: {}
  }
> {
  #rpc: tfplugin5.Provider
  #subprocess: execa.ExecaChildProcess

  #providerSchema: ObjectType<ObjectProperties>

  #dataSourceSchemas: Record<string, ObjectType<ObjectProperties>>
  #resourceSchemas: Record<string, ObjectType<ObjectProperties>>

  #dataSourceStateSchemas: Record<string, ObjectType<ObjectProperties>>
  #resourceStateSchemas: Record<string, ObjectType<ObjectProperties>>

  constructor({rpc, subprocess, schema}: Internals) {
    this.#rpc = rpc
    this.#subprocess = subprocess

    if (!schema.provider || !schema.provider.block) {
      throw new Error('Unable to read provider schema')
    }

    this.#providerSchema = tfSchemaToSchemaType(schema.provider, Kind.ARGS)

    this.#dataSourceSchemas = tfSchemasRecordToSchemaTypeRecord(schema.dataSourceSchemas, Kind.ARGS)
    this.#resourceSchemas = tfSchemasRecordToSchemaTypeRecord(schema.resourceSchemas, Kind.ARGS)

    this.#dataSourceStateSchemas = tfSchemasRecordToSchemaTypeRecord(schema.dataSourceSchemas, Kind.ATTRS)
    this.#resourceStateSchemas = tfSchemasRecordToSchemaTypeRecord(schema.resourceSchemas, Kind.ATTRS)
  }

  get providerSchema(): ObjectType<ObjectProperties> {
    return this.#providerSchema
  }

  get dataSourceSchemas(): Record<string, ObjectType<ObjectProperties>> {
    return this.#dataSourceSchemas
  }

  get resourceSchemas(): Record<string, ObjectType<ObjectProperties>> {
    return this.#resourceSchemas
  }

  get dataSourceStateSchemas(): Record<string, ObjectType<ObjectProperties>> {
    return this.#dataSourceStateSchemas
  }

  get resourceStateSchemas(): Record<string, ObjectType<ObjectProperties>> {
    return this.#resourceStateSchemas
  }

  async configure(config: ProviderConfig['providerSchema']): Promise<tfplugin5.Configure.Response> {
    validateOrThrow(this.#providerSchema, config)

    const {preparedConfig}: tfplugin5.PrepareProviderConfig.Response = await this.#rpc
      .prepareProviderConfig({config: toDynamic(optionalsToNulls(config, this.#providerSchema))})
      .then(throwDiagnosticErrors)

    if (!preparedConfig) {
      throw new Error('Unable to prepare provider config')
    }

    return await this.#rpc.configure({config: preparedConfig}).then(throwDiagnosticErrors)
  }

  async readDataSource<Name extends StringKeyOf<ProviderConfig['dataSourceSchemas']>>(
    typeName: Name,
    config: ProviderConfig['dataSourceSchemas'][Name],
  ): Promise<ProviderConfig['dataSourceStateSchemas'][Name]> {
    const dataSourceSchema: ObjectType<ObjectProperties> | undefined = this.#dataSourceSchemas[typeName]

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (dataSourceSchema === undefined) throw new TypeError(`Invalid data source type ${typeName}`)

    validateOrThrow(dataSourceSchema, config)

    const dynamicConfig = toDynamic(optionalsToNulls(config, dataSourceSchema))
    const res = await this.#rpc.readDataSource({typeName, config: dynamicConfig}).then(throwDiagnosticErrors)
    const state = fromDynamic<ProviderConfig['dataSourceStateSchemas'][Name]>(res.state)
    if (!state) {
      throw new Error('Unable to read state from data source')
    }
    return state
  }

  async shutdown(signal?: NodeJS.Signals | number): Promise<boolean> {
    return this.#subprocess.kill(signal)
  }
}

export function createProviderFactory<ProviderConfig extends ProviderConfigType>(): (
  binary: string,
  opts?: Options,
) => Promise<Provider<ProviderConfig>> {
  return async (binary: string, opts: Options = {}) => {
    const {subprocess, rpc} = await newRPC(binary, opts)
    const schema = await rpc.getSchema({})
    return new Provider<ProviderConfig>({
      subprocess,
      rpc,
      schema,
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
      dataSourceStateSchemas: T.object(provider.dataSourceStateSchemas),
      resourceStateSchemas: T.object(provider.resourceStateSchemas),
    }),
  )

  return `import {Provider} from '@infrascript/terraform-provider-client'

interface ProviderConfig extends ProviderConfigType ${providerConfig}

export const createProvider = createProviderFactory<ProviderConfig>()
`
}
