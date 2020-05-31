import * as grpc from '@grpc/grpc-js'
import {RPCImpl} from 'protobufjs'

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
