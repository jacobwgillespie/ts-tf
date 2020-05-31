import * as grpc from '@grpc/grpc-js'
import {RPCImpl} from 'protobufjs'
import {tfplugin5} from '../generated/client'

export {RPCImpl} from 'protobufjs'
export * from '../generated/client'

const Client = grpc.makeGenericClientConstructor({}, '')

function passThrough<T>(value: T): T {
  return value
}

export function rpcImpl(address: string): RPCImpl {
  const client = new Client(address, grpc.credentials.createInsecure())
  const impl: RPCImpl = (method, requestData, callback) => {
    client.makeUnaryRequest(
      `/tfplugin5.Provider/${method.name}`,
      passThrough as (value: Uint8Array) => Buffer,
      passThrough,
      requestData,
      callback,
    )
  }
  return impl
}

export function connect(address: string): tfplugin5.Provider {
  return tfplugin5.Provider.create(rpcImpl(address))
}
