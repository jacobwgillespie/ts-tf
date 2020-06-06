import {asCode, ObjectProperties, ObjectType, validateOrThrow} from '@infrascript/type-system'
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

export class Provider<ProviderConfig extends object> {
  #internals: Internals
  constructor(internals: Internals) {
    this.#internals = internals
  }

  get providerSchema(): ObjectType<ObjectProperties> {
    return this.#internals.providerSchema
  }

  async configure(config: ProviderConfig): Promise<tfplugin5.Configure.Response> {
    validateOrThrow(this.#internals.providerSchema, config)
    const dynamicConfig = toDynamic(optionalsToNulls(config, this.#internals.providerSchema))
    return await this.#internals.rpc.configure({config: dynamicConfig}).then(throwDiagnosticErrors)
  }

  async readDataSource<Config extends object, State extends object>(typeName: string, config: Config): Promise<State> {
    const dataSourceSchema: ObjectType<ObjectProperties> | undefined = this.#internals.dataSourceSchemas[typeName]

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (dataSourceSchema === undefined) throw new TypeError(`Invalid data source type ${typeName}`)

    validateOrThrow(dataSourceSchema, config)

    const dynamicConfig = toDynamic(optionalsToNulls(config, dataSourceSchema))
    const res = await this.#internals.rpc.readDataSource({typeName, config: dynamicConfig})
    throwDiagnosticErrors(res)
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

export function createProviderFactory<ProviderConfig extends object>(): (
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

    return new Provider<ProviderConfig>({dataSourceSchemas, subprocess, rpc, providerSchema, resourceSchemas})
  }
}

export const createProvider = createProviderFactory()

export function codegen(provider: Provider<object>): string {
  const providerConfig = asCode(provider.providerSchema)

  return `import {Provider} from '@infrascript/terraform-provider-client'

type ProviderConfig = ${providerConfig}

export const createProvider = createProviderFactory<ProviderConfig>()
`
}
