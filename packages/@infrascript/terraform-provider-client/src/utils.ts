import {TextDecoder, TextEncoder} from 'util'
import {Type, TypeSchema} from './Type'

const decoder = new TextDecoder()
const encoder = new TextEncoder()

export function decodeType(input: Uint8Array): Type {
  const typeMeta = JSON.parse(decoder.decode(input)) as TypeSchema
  return Type.parse(typeMeta) as Type
}

export function encodeType(type: Type): Uint8Array {
  return encoder.encode(JSON.stringify(type.schema()))
}
