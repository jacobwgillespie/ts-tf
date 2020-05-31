/* eslint-disable @typescript-eslint/no-explicit-any */
import {keysOf} from '@infrascript/types'
import {inspect} from 'util'

/** Represents the type schema coming from Terraform (cty) */
export type TypeSchema =
  | 'any'
  | 'bool'
  | 'number'
  | 'string'
  | ['list', TypeSchema]
  | ['map', TypeSchema]
  | ['object', {[key: string]: TypeSchema}]
  | ['set', TypeSchema]

/** Maps from the type schema to type classes */
type SchemaToTypeClass<T extends TypeSchema> = T extends 'bool'
  ? BooleanType
  : T extends 'number'
  ? NumberType
  : T extends 'string'
  ? StringType
  : T extends ['list', infer U]
  ? U extends TypeSchema
    ? ListType<SchemaToType<U>>
    : never
  : T extends ['map', infer U]
  ? U extends TypeSchema
    ? MapType<SchemaToType<U>>
    : never
  : T extends ['object', infer U]
  ? U extends {[name: string]: TypeSchema}
    ? ObjectType<{[K in keyof U]: SchemaToType<U[K]>}>
    : never
  : T extends ['set', infer U]
  ? U extends TypeSchema
    ? SetType<SchemaToType<U>>
    : never
  : never

/** Maps from the type schema to types */
type SchemaToType<T extends TypeSchema> = T extends 'bool'
  ? boolean
  : T extends 'number'
  ? number
  : T extends 'string'
  ? string
  : T extends ['list', infer U]
  ? U extends TypeSchema
    ? Array<SchemaToType<U>>
    : never
  : T extends ['map', infer U]
  ? U extends TypeSchema
    ? Map<string, SchemaToType<U>>
    : never
  : T extends ['object', infer U]
  ? U extends {[name: string]: TypeSchema}
    ? {[K in keyof U]: SchemaToType<U[K]>}
    : never
  : T extends ['set', infer U]
  ? U extends TypeSchema
    ? Set<SchemaToType<U>>
    : never
  : never

/** Maps from a type to the type schema */
type TypeToSchema<T> = T extends boolean
  ? 'bool'
  : T extends number
  ? 'number'
  : T extends string
  ? 'string'
  : T extends Array<infer U>
  ? ['list', TypeToSchema<U>]
  : T extends Map<string, infer U>
  ? ['map', TypeToSchema<U>]
  : T extends Set<infer U>
  ? ['set', TypeToSchema<U>]
  : T extends {[key: string]: unknown}
  ? ['object', {[K in keyof T]: TypeToSchema<T[K]>}]
  : never

/** Maps from a type to the type class */
type TypeToTypeClass<T> = T extends boolean
  ? BooleanType
  : T extends number
  ? NumberType
  : T extends string
  ? StringType
  : T extends Array<infer U>
  ? ListType<U>
  : T extends Map<string, infer U>
  ? MapType<U>
  : T extends Set<infer U>
  ? SetType<U>
  : T extends {[key: string]: unknown}
  ? ObjectType<T>
  : never

export abstract class Type<T = unknown> {
  static parse<Schema extends TypeSchema>(typeSchema: Schema): SchemaToTypeClass<Schema>
  static parse(typeSchema: TypeSchema): SchemaToTypeClass<TypeSchema> {
    switch (typeSchema) {
      case 'any':
        throw new Error('unknown type')

      case 'bool':
        return new BooleanType()

      case 'number':
        return new NumberType()

      case 'string':
        return new StringType()

      default:
        switch (typeSchema[0]) {
          case 'list':
            return new ListType<any>(this.parse(typeSchema[1]))

          case 'map':
            return new MapType<any>(this.parse(typeSchema[1]))

          case 'set':
            return new SetType<any>(this.parse(typeSchema[1]))

          case 'object': {
            const innerTypes = keysOf(typeSchema[1]).reduce(
              (types, key) => ({...types, [key]: this.parse(typeSchema[1][key])}),
              {},
            )
            return new ObjectType<any>(innerTypes)
          }

          default:
            throw new Error(`Unknown type: ${inspect(typeSchema)}`)
        }
    }
  }

  static is<Schema extends TypeSchema>(typeSchema: Schema, value: unknown): value is SchemaToType<Schema> {
    const type = this.parse(typeSchema)
    return type.is(value)
  }

  abstract schema(): TypeToSchema<T>

  abstract is(value: unknown): value is T

  /** The underlying type that this type class represents, access via `type Alias = typeof instance.type` */
  get type(): T {
    return (undefined as unknown) as T
  }
}

export class NumberType extends Type<number> {
  schema(): TypeToSchema<number> {
    return 'number'
  }

  is(value: unknown): value is number {
    return typeof value === 'number'
  }
}

export class StringType extends Type<string> {
  schema(): TypeToSchema<string> {
    return 'string'
  }

  is(value: unknown): value is string {
    return typeof value === 'string'
  }
}

export class BooleanType extends Type<boolean> {
  schema(): TypeToSchema<boolean> {
    return 'bool'
  }

  is(value: unknown): value is boolean {
    return typeof value === 'boolean'
  }
}

export abstract class CollectionType<T = unknown, Container = unknown, Child = unknown> extends Type<T> {
  #childType: TypeToTypeClass<Child>

  constructor(childType: TypeToTypeClass<Child>) {
    super()
    this.#childType = childType
  }

  abstract isContainer(value: unknown): value is Container

  isChild(value: unknown): value is Child {
    return this.#childType.is(value)
  }

  get childType(): TypeToTypeClass<Child> {
    return this.#childType
  }
}

export class ListType<T = unknown> extends CollectionType<Array<T>, Array<unknown>, T> {
  schema(): TypeToSchema<Array<T>>
  schema(): TypeSchema {
    return ['list', this.childType.schema()]
  }

  isContainer(value: unknown): value is Array<unknown> {
    return Array.isArray(value)
  }

  is(value: unknown): value is Array<T> {
    return this.isContainer(value) && value.every((child) => this.isChild(child))
  }
}

export class MapType<T = unknown> extends CollectionType<Map<string, T>, Map<string, unknown>, T> {
  schema(): TypeToSchema<Map<string, T>>
  schema(): TypeSchema {
    return ['map', this.childType.schema()]
  }

  isContainer(value: unknown): value is Map<string, unknown> {
    return value instanceof Map && [...value.keys()].every((key) => typeof key === 'string')
  }

  is(value: unknown): value is Map<string, T> {
    return this.isContainer(value) && [...value.values()].every((child) => this.isChild(child))
  }
}

export class SetType<T = unknown> extends CollectionType<Set<T>, Set<unknown>, T> {
  schema(): TypeToSchema<Set<T>>
  schema(): TypeSchema {
    return ['set', this.childType.schema()]
  }

  isContainer(value: unknown): value is Set<unknown> {
    return value instanceof Set
  }

  is(value: unknown): value is Set<T> {
    return this.isContainer(value) && [...value.values()].every((child) => this.isChild(child))
  }
}

// type ObjectInnerTypeMap<T> = {[K in keyof T]: TypeToTypeClass<T[K]>}

export class ObjectType<T extends {[k: string]: unknown} = {}> extends Type<T> {
  #innerTypeMap: {[K in keyof T]: TypeToTypeClass<T[K]>}

  constructor(innerTypeMap: {[K in keyof T]: TypeToTypeClass<T[K]>}) {
    super()
    this.#innerTypeMap = innerTypeMap
  }

  schema(): TypeToSchema<T>
  schema(): TypeSchema {
    const typeSchema = keysOf(this.#innerTypeMap).reduce(
      (schema, key) => ({...schema, [key]: this.#innerTypeMap[key].schema()}),
      {},
    )
    return ['object', typeSchema]
  }

  is(value: unknown): value is T {
    if (typeof value !== 'object' || value === null) {
      return false
    }

    const valueKeys = new Set<keyof T>(keysOf(value))
    const expectedKeys = new Set<keyof T>(keysOf(this.#innerTypeMap) as (keyof typeof value)[])

    if (new Set([...valueKeys].filter((key) => !expectedKeys.has(key))).size !== 0) {
      return false
    }

    if (new Set([...expectedKeys].filter((key) => !valueKeys.has(key))).size !== 0) {
      return false
    }

    if ([...valueKeys].some((key) => !this.#innerTypeMap[key].is(value[key as keyof typeof value]))) {
      return false
    }

    return true
  }
}
