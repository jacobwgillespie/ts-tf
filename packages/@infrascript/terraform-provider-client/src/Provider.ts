import {ObjectProperties, ObjectType, validateOrThrow} from '@infrascript/type-system'
import execa from 'execa'
import {tfplugin5} from '../generated/client'
import {newRPC} from './rpc'
import {blockToSchemaType, optionalsToNulls, toDynamic} from './types'

export interface Options {
  /** If true, the provider's debug messages will be printed on stderr */
  debug?: boolean
}

interface Internals {
  providerSchema: ObjectType<ObjectProperties>
  rpc: tfplugin5.Provider
  subprocess: execa.ExecaChildProcess
}

export class Provider {
  static async fromBinary(binary: string, opts: Options = {}): Promise<Provider> {
    const {subprocess, rpc} = await newRPC(binary, opts)

    const schema = await rpc.getSchema({})
    if (!schema.provider || !schema.provider.block) {
      throw new Error('Unable to read provider schema')
    }

    console.log(schema.diagnostics)
    const providerSchema = blockToSchemaType(schema.provider.block)

    return new Provider({subprocess, rpc, providerSchema})
  }

  #internals: Internals
  private constructor(internals: Internals) {
    this.#internals = internals
  }

  async configure<T extends object>(options: T): Promise<tfplugin5.Configure.Response> {
    validateOrThrow(this.#internals.providerSchema, options)
    const config = optionalsToNulls(options, this.#internals.providerSchema)
    return await this.#internals.rpc.configure({config: toDynamic(config)})
  }

  async readDataSource(request: tfplugin5.ReadDataSource.IRequest): Promise<tfplugin5.ReadDataSource.Response> {
    return this.#internals.rpc.readDataSource(request)
  }

  async shutdown(signal?: NodeJS.Signals | number): Promise<boolean> {
    return this.#internals.subprocess.kill(signal)
  }
}
