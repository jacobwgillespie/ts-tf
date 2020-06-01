/* eslint-disable @typescript-eslint/no-explicit-any */
import {keysOf, StringKeyOf} from '@infrascript/types'
import {inspect} from 'util'

// Modifiers

const OPTIONAL = Symbol('@@optional@@')
const READONLY = Symbol('@@readonly@@')

type OptionalType<T extends SchemaType> = T & {[OPTIONAL]: true}
type ReadonlyType<T extends SchemaType> = T & {[READONLY]: true}

type OptionalPropertyKeys<T extends ObjectProperties> = {
  [K in keyof T]: T[K] extends OptionalType<infer _> ? K : never
}[keyof T]
type ReadonlyPropertyKeys<T extends ObjectProperties> = {
  [K in keyof T]: T[K] extends ReadonlyType<infer _> ? K : never
}[keyof T]

type RequiredPropertyKeys<T extends ObjectProperties> = keyof Omit<T, OptionalPropertyKeys<T>>
type MutablePropertyKeys<T extends ObjectProperties> = keyof Omit<T, ReadonlyPropertyKeys<T>>

// Type Options

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NumberOptions {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StringOptions {}

// Schema Types

export type SchemaType =
  | BooleanType
  | NullType
  | NumberType
  | StringType
  | UndefinedType
  | ArrayType<any>
  | MapType<any>
  | ObjectType<any>
  | TupleType<SchemaType[]>

export interface BooleanType {
  type: 'boolean'
}

export interface NullType {
  type: 'null'
}

export interface NumberType extends NumberOptions {
  type: 'number'
}

export interface StringType extends StringOptions {
  type: 'string'
}

export interface UndefinedType {
  type: 'undefined'
}

export interface ArrayType<T extends SchemaType> {
  type: 'array'
  items: T
}

export interface MapType<T extends SchemaType> {
  type: 'object'
  additionalProperties: T
}

export interface TupleType<T extends SchemaType[]> {
  type: 'array'
  items: T
}

export type ObjectProperties = {
  [key: string]:
    | SchemaType
    | OptionalType<SchemaType>
    | ReadonlyType<SchemaType>
    | OptionalType<ReadonlyType<SchemaType>>
}

export interface ObjectType<T extends ObjectProperties> {
  type: 'object'
  properties: T
  required?: StringKeyOf<T>[]
}

// TypeOf

export type TypeOfObjectProperties<T extends ObjectProperties> = {
  [K in Extract<RequiredPropertyKeys<T>, MutablePropertyKeys<T>>]: TypeOf<T[K]>
} &
  {
    [K in Extract<OptionalPropertyKeys<T>, MutablePropertyKeys<T>>]?: TypeOf<T[K]>
  } &
  {
    readonly [K in Extract<RequiredPropertyKeys<T>, ReadonlyPropertyKeys<T>>]: TypeOf<T[K]>
  } &
  {
    readonly [K in Extract<OptionalPropertyKeys<T>, ReadonlyPropertyKeys<T>>]?: TypeOf<T[K]>
  }

type TypeOfTuple<T extends SchemaType[]> = {[K in keyof T]: T[K] extends SchemaType ? TypeOf<T[K]> : never}

export type TypeOf<T extends SchemaType> = T extends BooleanType
  ? boolean
  : T extends NullType
  ? null
  : T extends NumberType
  ? number
  : T extends StringType
  ? string
  : T extends UndefinedType
  ? undefined
  : T extends ArrayType<infer U>
  ? Array<TypeOf<U>>
  : T extends MapType<infer U>
  ? {[key: string]: TypeOf<U>}
  : T extends ObjectType<infer U>
  ? TypeOfObjectProperties<U>
  : T extends TupleType<infer U>
  ? TypeOfTuple<U>
  : never

// Schema Builders

export class T {
  // Types
  static boolean = (): BooleanType => ({type: 'boolean'})
  static null = (): NullType => ({type: 'null'})
  static number = (options: NumberOptions = {}): NumberType => ({...options, type: 'number'})
  static string = (options: StringOptions = {}): StringType => ({...options, type: 'string'})
  static undefined = (): UndefinedType => ({type: 'undefined'})

  static array = <T extends SchemaType>(items: T): ArrayType<T> => ({type: 'array', items})

  static map = <T extends SchemaType>(items: T): MapType<T> => ({type: 'object', additionalProperties: items})

  static object = <T extends ObjectProperties>(properties: T): ObjectType<T> => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const required = keysOf(properties).filter((key) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const prop: OptionalType<SchemaType> = (properties[key] as unknown) as OptionalType<any>
      return !prop[OPTIONAL]
    })
    return {type: 'object', properties, ...(required.length > 0 ? {required} : {})}
  }

  static tuple = <T extends SchemaType[]>(...items: T): TupleType<T> => ({type: 'array', items})

  // Modifiers

  static optional = <T extends SchemaType>(item: T): OptionalType<T> =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    Object.defineProperty({...item}, OPTIONAL, {value: true, enumerable: false})

  static readonly = <T extends SchemaType>(item: T): ReadonlyType<T> =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    Object.defineProperty({...item}, READONLY, {value: true, enumerable: false})
}

function isSchemaType(value: unknown): value is SchemaType {
  if (typeof value !== 'object' || value == null) {
    return false
  }

  if (!('type' in value)) {
    return false
  }

  return typeof (value as SchemaType).type === 'string'
}

const isBooleanType = (value: SchemaType): value is BooleanType => value.type === 'boolean'
const isNullType = (value: SchemaType): value is NullType => value.type === 'null'
const isNumberType = (value: SchemaType): value is NumberType => value.type === 'number'
const isStringType = (value: SchemaType): value is StringType => value.type === 'string'
const isUndefinedType = (value: SchemaType): value is UndefinedType => value.type === 'undefined'

const isArrayType = (value: SchemaType): value is ArrayType<SchemaType> =>
  value.type === 'array' && !Array.isArray(value.items)

const isObjectType = (value: SchemaType): value is ObjectType<ObjectProperties> => value.type === 'object'

const isTupleType = (value: SchemaType): value is TupleType<SchemaType[]> =>
  value.type === 'array' && Array.isArray(value.items)

export type ValidationIssue = {
  type: 'INVALID_SCHEMA' | 'INVALID_TYPE'
  message: string
  path: string
}

const invalidTypeIssue = (expected: string, value: unknown, path: string): ValidationIssue => ({
  type: 'INVALID_TYPE',
  message: `Invalid type, expected ${expected}, got ${inspect(value)}`,
  path,
})

function validateWithPath<T extends SchemaType>(path: string, schema: T, value: unknown): ValidationIssue[] {
  if (!isSchemaType(schema)) {
    return [{type: 'INVALID_SCHEMA', message: 'Invalid schema', path}]
  }

  if (isBooleanType(schema)) {
    return typeof value === 'boolean' ? [] : [invalidTypeIssue('boolean', value, path)]
  }

  if (isNullType(schema)) {
    return typeof value === 'object' && value === null ? [] : [invalidTypeIssue('null', value, path)]
  }

  if (isNumberType(schema)) {
    return typeof value === 'number' ? [] : [invalidTypeIssue('number', value, path)]
  }

  if (isStringType(schema)) {
    return typeof value === 'string' ? [] : [invalidTypeIssue('string', value, path)]
  }

  if (isUndefinedType(schema)) {
    return typeof value === 'undefined' ? [] : [invalidTypeIssue('undefined', value, path)]
  }

  if (isArrayType(schema)) {
    if (!Array.isArray(value)) {
      return [invalidTypeIssue('array', value, path)]
    }

    return value.flatMap((item, idx) => validateWithPath(`${path}/${idx}`, schema.items, item))
  }

  if (isTupleType(schema)) {
    if (!Array.isArray(value)) {
      return [invalidTypeIssue('tuple', value, path)]
    }

    const items = schema.items as TupleType<SchemaType[]>['items']
    if (value.length !== items.length) {
      return [
        {
          type: 'INVALID_TYPE',
          message: `Expected ${items.length} elements, got ${value.length} elements instead`,
          path,
        },
      ]
    }

    return value.flatMap((item, idx) => validateWithPath(`${path}/${idx}`, items[idx], item))
  }

  if (isObjectType(schema)) {
    if (typeof value !== 'object' || value === null) {
      return [invalidTypeIssue('object', value, path)]
    }

    const issues: ValidationIssue[] = []

    const valueKeys = new Set<keyof T>(keysOf(value))
    const expectedKeys = new Set<keyof T>(keysOf(schema.properties) as (keyof typeof value)[])
    const requiredKeys = new Set(schema.required ?? [])

    const extraKeys = new Set([...valueKeys].filter((key) => !expectedKeys.has(key)))
    const missingRequiredKeys = new Set([...requiredKeys].filter((key) => !valueKeys.has(key as keyof typeof value)))

    if (extraKeys.size > 0) {
      issues.push({type: 'INVALID_TYPE', message: `Unexpected keys: ${[...extraKeys].join(', ')}`, path})
    }

    if (missingRequiredKeys.size > 0) {
      issues.push({
        type: 'INVALID_TYPE',
        message: `Missing required keys: ${[...missingRequiredKeys].join(', ')}`,
        path,
      })
    }

    return [
      ...issues,
      ...(keysOf(value) as string[]).flatMap((key) =>
        validateWithPath(
          `${path}/${key}`,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          schema.properties[key as keyof typeof schema.properties],
          value[key as keyof typeof value],
        ),
      ),
    ]
  }

  return [{type: 'INVALID_SCHEMA', message: 'Unable to validate type', path}]
}

export function validate<T extends SchemaType>(schema: T, value: unknown): ValidationIssue[] {
  return validateWithPath('', schema, value)
}

export function is<T extends SchemaType>(schema: T, value: unknown): value is TypeOf<T> {
  const issues = validate(schema, value)
  return issues.length === 0
}
