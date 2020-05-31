/* eslint-disable @typescript-eslint/no-explicit-any */
import {keysOf} from '@infrascript/types'
import {inspect} from 'util'

/** Represents the serialized type names coming from Terraform (cty) */
export type TypeMeta =
  | 'any'
  | 'bool'
  | 'number'
  | 'string'
  | ['list', TypeMeta]
  | ['map', TypeMeta]
  | ['object', {[key: string]: TypeMeta}]
  | ['set', TypeMeta]

/** Maps from the serialized type metadata to type classes */
type MetaToTypeClass<T extends TypeMeta> = T extends 'bool'
  ? BooleanType
  : T extends 'number'
  ? NumberType
  : T extends 'string'
  ? StringType
  : T extends ['list', infer U]
  ? U extends TypeMeta
    ? ListType<MetaToType<U>>
    : never
  : T extends ['map', infer U]
  ? U extends TypeMeta
    ? MapType<MetaToType<U>>
    : never
  : T extends ['object', infer U]
  ? U extends {[name: string]: TypeMeta}
    ? ObjectType<{[K in keyof U]: MetaToType<U[K]>}>
    : never
  : T extends ['set', infer U]
  ? U extends TypeMeta
    ? SetType<MetaToType<U>>
    : never
  : never

/** Maps from the serialized type metadata to types */
type MetaToType<T extends TypeMeta> = T extends 'bool'
  ? boolean
  : T extends 'number'
  ? number
  : T extends 'string'
  ? string
  : T extends ['list', infer U]
  ? U extends TypeMeta
    ? Array<MetaToType<U>>
    : never
  : T extends ['map', infer U]
  ? U extends TypeMeta
    ? Map<string, MetaToType<U>>
    : never
  : T extends ['object', infer U]
  ? U extends {[name: string]: TypeMeta}
    ? {[K in keyof U]: MetaToType<U[K]>}
    : never
  : T extends ['set', infer U]
  ? U extends TypeMeta
    ? Set<MetaToType<U>>
    : never
  : never

/** Maps from a type to the serialized type metadata */
type TypeToMeta<T> = T extends boolean
  ? 'bool'
  : T extends number
  ? 'number'
  : T extends string
  ? 'string'
  : T extends Array<infer U>
  ? ['list', TypeToMeta<U>]
  : T extends Map<string, infer U>
  ? ['map', TypeToMeta<U>]
  : T extends Set<infer U>
  ? ['set', TypeToMeta<U>]
  : T extends {[key: string]: unknown}
  ? ['object', {[K in keyof T]: TypeToMeta<T[K]>}]
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
  static parse<Meta extends TypeMeta>(typeMeta: Meta): MetaToTypeClass<Meta>
  static parse(typeMeta: TypeMeta): MetaToTypeClass<TypeMeta> {
    switch (typeMeta) {
      case 'any':
        throw new Error('unknown type')

      case 'bool':
        return new BooleanType()

      case 'number':
        return new NumberType()

      case 'string':
        return new StringType()

      default:
        switch (typeMeta[0]) {
          case 'list':
            return new ListType<any>(this.parse(typeMeta[1]))

          case 'map':
            return new MapType<any>(this.parse(typeMeta[1]))

          case 'set':
            return new SetType<any>(this.parse(typeMeta[1]))

          case 'object': {
            const innerTypeMeta = keysOf(typeMeta[1]).reduce(
              (meta, key) => ({...meta, [key]: this.parse(typeMeta[1][key])}),
              {},
            )
            return new ObjectType<any>(innerTypeMeta)
          }

          default:
            throw new Error(`Unknown type: ${inspect(typeMeta)}`)
        }
    }
  }

  static is<Meta extends TypeMeta>(typeMeta: Meta, value: unknown): value is MetaToType<Meta> {
    const type = this.parse(typeMeta)
    return type.is(value)
  }

  abstract metaRepresentation(): TypeToMeta<T>

  abstract is(value: unknown): value is T

  /** The underlying type that this type class represents, access via `type Alias = typeof instance.type` */
  get type(): T {
    return (undefined as unknown) as T
  }
}

export class NumberType extends Type<number> {
  metaRepresentation(): TypeToMeta<number> {
    return 'number'
  }

  is(value: unknown): value is number {
    return typeof value === 'number'
  }
}

export class StringType extends Type<string> {
  metaRepresentation(): TypeToMeta<string> {
    return 'string'
  }

  is(value: unknown): value is string {
    return typeof value === 'string'
  }
}

export class BooleanType extends Type<boolean> {
  metaRepresentation(): TypeToMeta<boolean> {
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
  metaRepresentation(): TypeToMeta<Array<T>>
  metaRepresentation(): TypeMeta {
    return ['list', this.childType.metaRepresentation()]
  }

  isContainer(value: unknown): value is Array<unknown> {
    return Array.isArray(value)
  }

  is(value: unknown): value is Array<T> {
    return this.isContainer(value) && value.every((child) => this.isChild(child))
  }
}

export class MapType<T = unknown> extends CollectionType<Map<string, T>, Map<string, unknown>, T> {
  metaRepresentation(): TypeToMeta<Map<string, T>>
  metaRepresentation(): TypeMeta {
    return ['map', this.childType.metaRepresentation()]
  }

  isContainer(value: unknown): value is Map<string, unknown> {
    return value instanceof Map && [...value.keys()].every((key) => typeof key === 'string')
  }

  is(value: unknown): value is Map<string, T> {
    return this.isContainer(value) && [...value.values()].every((child) => this.isChild(child))
  }
}

export class SetType<T = unknown> extends CollectionType<Set<T>, Set<unknown>, T> {
  metaRepresentation(): TypeToMeta<Set<T>>
  metaRepresentation(): TypeMeta {
    return ['set', this.childType.metaRepresentation()]
  }

  isContainer(value: unknown): value is Set<unknown> {
    return value instanceof Set
  }

  is(value: unknown): value is Set<T> {
    return this.isContainer(value) && [...value.values()].every((child) => this.isChild(child))
  }
}

type ObjectInnerTypeMap<T> = {[K in keyof T]: TypeToTypeClass<T[K]>}

export class ObjectType<T extends {[k: string]: unknown} = {}> extends Type<T> {
  #innerTypeMap: ObjectInnerTypeMap<T>

  constructor(innerTypeMap: ObjectInnerTypeMap<T>) {
    super()
    this.#innerTypeMap = innerTypeMap
  }

  metaRepresentation(): TypeToMeta<T>
  metaRepresentation(): TypeMeta {
    const typeMeta = keysOf(this.#innerTypeMap).reduce(
      (meta, key) => ({...meta, [key]: this.#innerTypeMap[key].metaRepresentation()}),
      {},
    )
    return ['object', typeMeta]
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
