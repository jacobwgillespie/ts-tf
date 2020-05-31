import execa from 'execa'
import readline from 'readline'
import {tfplugin5, rpcImpl, RPCImpl} from '@infrascript/terraform-provider-client'
import msgpack from 'msgpack'

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

export interface Options {
  /** If true, the provider's debug messages will be printed on stderr */
  debug?: boolean
}

export class Provider extends tfplugin5.Provider {
  #subprocess: execa.ExecaChildProcess | null = null

  static async fromBinary(binary: string, opts: Options = {}): Promise<Provider> {
    const subprocess = execa(binary, [], {
      env: {
        TF_PLUGIN_MAGIC_COOKIE: 'd602bf8f470bc67ca7faa0386276bbdd4330efaf76d1a219cb4d6991ca9872b2',
        PLUGIN_PROTOCOL_VERSIONS: '5',
      },
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

    return new Promise((resolve) =>
      line.once('line', (metadataString) => {
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
        const provider = new Provider(impl)
        provider.#subprocess = subprocess
        resolve(provider)
      }),
    )
  }

  constructor(impl: RPCImpl) {
    super(impl)
  }

  get subprocess(): execa.ExecaChildProcess | null {
    return this.#subprocess
  }

  async shutdown(signal?: NodeJS.Signals | number): Promise<boolean> {
    if (this.#subprocess) {
      return this.#subprocess.kill(signal)
    }

    return false
  }
}
