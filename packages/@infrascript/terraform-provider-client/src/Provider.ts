import {ObjectProperties, ObjectType, SchemaType, T, validateOrThrow} from '@infrascript/type-system'
import execa from 'execa'
import msgpack from 'msgpack'
import readline from 'readline'
import {tfplugin5} from '../generated/client'
import {decodeCtyType} from './CtyTypes'
import {rpcImpl} from './rpcImpl'

export function toDynamic(value: unknown): tfplugin5.IDynamicValue {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return {msgpack: msgpack.pack(value)}
}

export function fromDynamic<T = unknown>(value: tfplugin5.IDynamicValue | null | undefined): T | null | undefined {
  if (!value) {
    return value
  }

  if (!value.msgpack) {
    return value.msgpack
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return msgpack.unpack(value.msgpack)
}

function optionalsToNulls(value: object, schema: ObjectType<ObjectProperties>): Record<string, unknown> {
  return Object.keys(schema.properties).reduce<Record<string, unknown>>((obj, key) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    obj[key] = (value as Record<string, unknown>)[key] ?? null
    return obj
  }, {})
}

function nestedBlockToSchemaType(nestedBlock: tfplugin5.Schema.INestedBlock): SchemaType {
  if (!nestedBlock.block) {
    throw new Error('Unable to read nested block schema')
  }

  const innerSchema = blockToSchemaType(nestedBlock.block)

  switch (nestedBlock.nesting) {
    case undefined:
    case null:
    case tfplugin5.Schema.NestedBlock.NestingMode.INVALID:
      throw new Error('Invalid nesting mode')

    // Single block
    case tfplugin5.Schema.NestedBlock.NestingMode.SINGLE:
      return innerSchema

    // List of blocks
    case tfplugin5.Schema.NestedBlock.NestingMode.LIST:
      return nestedBlock.maxItems === 1 ? innerSchema : T.array(innerSchema)

    // Set of blocks
    case tfplugin5.Schema.NestedBlock.NestingMode.SET:
      return nestedBlock.maxItems === 1 ? innerSchema : T.array(innerSchema)

    // Map of string to blocks
    case tfplugin5.Schema.NestedBlock.NestingMode.MAP:
      // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
      return T.map(innerSchema)

    // Single item, will be marked as optional
    case tfplugin5.Schema.NestedBlock.NestingMode.GROUP:
      return innerSchema
  }
}

function blockToSchemaType(block: tfplugin5.Schema.IBlock) {
  const schemaAttributes = block.attributes ?? []
  const attrs: ObjectProperties = {}

  for (const attribute of schemaAttributes) {
    if (!attribute.type) {
      throw new Error('Unable to read attribute type')
    }

    if (attribute.name == null) {
      throw new Error('Unable to read attribute name')
    }

    attrs[attribute.name] = decodeCtyType(attribute.type)
    if (attribute.optional) {
      attrs[attribute.name] = T.optional(attrs[attribute.name])
    }
  }

  const schemaBlocks = block.blockTypes ?? []

  for (const nestedBlock of schemaBlocks) {
    if (nestedBlock.typeName == null) {
      throw new Error('Unable to read nested block name')
    }
    if (
      nestedBlock.minItems != null &&
      nestedBlock.minItems > 0 &&
      nestedBlock.nesting !== tfplugin5.Schema.NestedBlock.NestingMode.GROUP
    ) {
      attrs[nestedBlock.typeName] = nestedBlockToSchemaType(nestedBlock)
    } else {
      attrs[nestedBlock.typeName] = T.optional(nestedBlockToSchemaType(nestedBlock))
    }
  }

  return T.object(attrs)
}

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
    const subprocess = execa(binary, [], {
      env: {
        TF_PLUGIN_MAGIC_COOKIE: 'd602bf8f470bc67ca7faa0386276bbdd4330efaf76d1a219cb4d6991ca9872b2',
        PLUGIN_PROTOCOL_VERSIONS: '5',
      },
    }).on('error', (error) => {
      throw error
    })

    if (opts.debug) {
      subprocess.stderr?.pipe(process.stderr)
    }

    if (subprocess.stdout === null) {
      throw new Error('Unable to read stdout from provider')
    }

    const line = readline.createInterface({
      input: subprocess.stdout,
      terminal: false,
    })

    const metadataString = await new Promise<string>((resolve) =>
      line.once('line', (metadataString) => {
        resolve(metadataString)
      }),
    )

    const metadata = metadataString.split('|')

    if (metadata.length !== 6) {
      throw new Error(`Unexpected metadata string format: ${metadataString}`)
    }

    const [
      coreProtocolVersion,
      protocolVersion,
      networkType,
      networkAddress,
      protocolType,
      /* serverCert */
    ] = metadata

    if (coreProtocolVersion !== '1') {
      throw new Error(`Expected core protocol version '1', got '${coreProtocolVersion}'`)
    }

    if (protocolVersion !== '5') {
      throw new Error(`Expected protocol version '5', got '${coreProtocolVersion}'`)
    }

    if (networkType !== 'unix') {
      throw new Error(`Expected network address type 'unix', got '${networkType}'`)
    }

    if (protocolType !== 'grpc') {
      throw new Error(`Expected protocol type 'grpc', got '${protocolType}'`)
    }

    const impl = rpcImpl(`unix://${networkAddress}`)
    const rpc = new tfplugin5.Provider(impl)

    const schema = await rpc.getSchema({})
    if (!schema.provider || !schema.provider.block) {
      throw new Error('Unable to read provider schema')
    }

    console.log(schema.diagnostics)
    const providerSchema = blockToSchemaType(schema.provider.block)

    return new Provider({subprocess, rpc, providerSchema})
  }

  private constructor(internals: Internals) {
    this.#internals = internals
  }

  #internals: Internals

  get subprocess(): execa.ExecaChildProcess | null {
    return this.#internals.subprocess
  }

  get rpc(): tfplugin5.Provider {
    return this.#internals.rpc
  }

  async configure<T extends object>(options: T): Promise<tfplugin5.Configure.Response> {
    validateOrThrow(this.#internals.providerSchema, options)
    const config = optionalsToNulls(options, this.#internals.providerSchema)
    return await this.#internals.rpc.configure({config: toDynamic(config)})
  }

  async getConfigureSchemaType(): Promise<SchemaType> {
    const schema = await this.#internals.rpc.getSchema({})
    if (!schema.provider || !schema.provider.block) {
      throw new Error('Unable to read provider schema')
    }

    return blockToSchemaType(schema.provider.block)
  }

  async readDataSource(request: tfplugin5.ReadDataSource.IRequest): Promise<tfplugin5.ReadDataSource.Response> {
    return this.#internals.rpc.readDataSource(request)
  }

  async shutdown(signal?: NodeJS.Signals | number): Promise<boolean> {
    return this.#internals.subprocess.kill(signal)
  }
}
