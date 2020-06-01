import {keysOf} from '@infrascript/types'
import {inspect, TextDecoder} from 'util'
import {ArrayType, BooleanType, MapType, NumberType, ObjectType, SchemaType, StringType, T} from './TypeSystem'

export type CtyTypeSchema =
  | 'any'
  | 'bool'
  | 'number'
  | 'string'
  | ['list', CtyTypeSchema]
  | ['map', CtyTypeSchema]
  | ['object', {[key: string]: CtyTypeSchema}]
  | ['set', CtyTypeSchema]

/** Maps from the cty type schema to type system schema */
type CtyToSchemaType<T extends CtyTypeSchema> = T extends 'bool'
  ? BooleanType
  : T extends 'number'
  ? NumberType
  : T extends 'string'
  ? StringType
  : T extends ['list', infer U]
  ? U extends CtyTypeSchema
    ? ArrayType<CtyToSchemaType<U>>
    : never
  : T extends ['map', infer U]
  ? U extends CtyTypeSchema
    ? MapType<CtyToSchemaType<U>>
    : never
  : T extends ['object', infer U]
  ? U extends {[name: string]: CtyTypeSchema}
    ? ObjectType<{[K in keyof U]: CtyToSchemaType<U[K]>}>
    : never
  : T extends ['set', infer U]
  ? U extends CtyTypeSchema
    ? ArrayType<CtyToSchemaType<U>>
    : never
  : never

const decoder = new TextDecoder()
export function decodeCtyType(input: Uint8Array): SchemaType {
  const typeMeta = JSON.parse(decoder.decode(input)) as CtyTypeSchema
  return ctyToType(typeMeta) as SchemaType
}

export function ctyToType<T extends CtyTypeSchema>(schema: T): CtyToSchemaType<T>
export function ctyToType(schema: CtyTypeSchema): SchemaType {
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
