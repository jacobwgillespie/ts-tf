import {keysOf} from '@infrascript/types'
import {inspect, TextDecoder} from 'util'
import {ArrayType, BooleanType, MapType, NumberType, ObjectType, SchemaType, StringType, T} from './TypeSystem'

export type TypeSchema =
  | 'any'
  | 'bool'
  | 'number'
  | 'string'
  | ['list', TypeSchema]
  | ['map', TypeSchema]
  | ['object', {[key: string]: TypeSchema}]
  | ['set', TypeSchema]

/** Maps from the cty type schema to type system schema */
type CtyToTypeSchema<T extends TypeSchema> = T extends 'bool'
  ? BooleanType
  : T extends 'number'
  ? NumberType
  : T extends 'string'
  ? StringType
  : T extends ['list', infer U]
  ? U extends TypeSchema
    ? ArrayType<CtyToTypeSchema<U>>
    : never
  : T extends ['map', infer U]
  ? U extends TypeSchema
    ? MapType<CtyToTypeSchema<U>>
    : never
  : T extends ['object', infer U]
  ? U extends {[name: string]: TypeSchema}
    ? ObjectType<{[K in keyof U]: CtyToTypeSchema<U[K]>}>
    : never
  : T extends ['set', infer U]
  ? U extends TypeSchema
    ? ArrayType<CtyToTypeSchema<U>>
    : never
  : never

const decoder = new TextDecoder()
export function decodeCtyType(input: Uint8Array): SchemaType {
  const typeMeta = JSON.parse(decoder.decode(input)) as TypeSchema
  return ctyToType(typeMeta) as SchemaType
}

export function ctyToType<T extends TypeSchema>(schema: T): CtyToTypeSchema<T>
export function ctyToType(schema: TypeSchema): SchemaType {
  switch (schema) {
    case 'any':
      throw new Error('unknown type')

    case 'bool':
      return T.boolean()

    case 'number':
      return T.number()

    case 'string':
      return T.string()

    default:
      switch (schema[0]) {
        case 'list':
          return T.array(ctyToType(schema[1]))

        case 'map':
          // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
          return T.map(ctyToType(schema[1]))

        case 'set':
          return T.array(ctyToType(schema[1]))

        case 'object': {
          const innerTypes = keysOf(schema[1]).reduce(
            (types, key) => ({...types, [key]: ctyToType(schema[1][key])}),
            {},
          )
          return T.object(innerTypes)
        }

        default:
          throw new Error(`Unknown type: ${inspect(schema)}`)
      }
  }
}
