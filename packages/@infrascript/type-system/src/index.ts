/* eslint-disable @typescript-eslint/no-explicit-any */
import {keysOf, StringKeyOf} from '@infrascript/types'
import {inspect} from 'util'

// Modifiers

const OPTIONAL = Symbol('@@optional@@')
const READONLY = Symbol('@@readonly@@')

type OptionalType<T extends SchemaType> = T & {[OPTIONAL]: true}
type ReadonlyType<T extends SchemaType> = T & {[READONLY]: true}
type ModifiedType<T extends SchemaType> = T & {[OPTIONAL]?: true; [READONLY]?: true}

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
  | ArrayType<SchemaType>
  | MapType<SchemaType>
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
    const required = keysOf(properties).filter((key) => {
      const prop: ModifiedType<SchemaType> = properties[key]
      return !prop[OPTIONAL]
    })
    return {type: 'object', properties, ...(required.length > 0 ? {required} : {})}
  }

  static tuple = <T extends SchemaType[]>(...items: T): TupleType<T> => ({type: 'array', items})

  // Modifiers

  static optional = <T extends SchemaType>(item: T): OptionalType<T> =>
    Object.defineProperty({...item}, OPTIONAL, {value: true, enumerable: false}) as OptionalType<T>

  static readonly = <T extends SchemaType>(item: T): ReadonlyType<T> =>
    Object.defineProperty({...item}, READONLY, {value: true, enumerable: false}) as ReadonlyType<T>
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

export const isBooleanType = (value: SchemaType): value is BooleanType => value.type === 'boolean'
export const isNullType = (value: SchemaType): value is NullType => value.type === 'null'
export const isNumberType = (value: SchemaType): value is NumberType => value.type === 'number'
export const isStringType = (value: SchemaType): value is StringType => value.type === 'string'
export const isUndefinedType = (value: SchemaType): value is UndefinedType => value.type === 'undefined'

export const isArrayType = (value: SchemaType): value is ArrayType<SchemaType> =>
  value.type === 'array' && !Array.isArray(value.items)

export const isObjectType = (value: SchemaType): value is ObjectType<ObjectProperties> => value.type === 'object'

export const isTupleType = (value: SchemaType): value is TupleType<SchemaType[]> =>
  value.type === 'array' && Array.isArray(value.items)

export const isOptional = <T extends SchemaType>(value: T): value is OptionalType<T> => {
  const type = value as ModifiedType<T>
  return type[OPTIONAL] === true
}

export const isReadonly = <T extends SchemaType>(value: T): value is ReadonlyType<T> => {
  const type = value as ModifiedType<T>
  return type[READONLY] === true
}

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
    if (typeof value !== 'object' || Array.isArray(value) || value === null) {
      return [invalidTypeIssue('object', value, path)]
    }

    const issues: ValidationIssue[] = []

    const valueKeys = new Set<StringKeyOf<T>>(keysOf(value))
    const expectedKeys = new Set<StringKeyOf<T>>(keysOf(schema.properties) as StringKeyOf<typeof value>[])
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

    issues.push(
      ...[...valueKeys].flatMap((key) =>
        expectedKeys.has(key)
          ? // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            validateWithPath(`${path}/${key}`, schema.properties[key], value[key as keyof typeof value])
          : [],
      ),
    )

    return issues
  }

  return [{type: 'INVALID_SCHEMA', message: 'Unable to validate type', path}]
}

export function formatIssues(issues: ValidationIssue[]): string {
  return issues.map((issue) => `${issue.message} (at ${issue.path})`).join('\n')
}

export function validate<T extends SchemaType>(schema: T, value: unknown): ValidationIssue[] {
  return validateWithPath('', schema, value)
}

export function validateOrThrow<T extends SchemaType>(schema: T, value: unknown): void {
  const issues = validate(schema, value)
  if (issues.length > 0) {
    throw new TypeError(formatIssues(issues))
  }
}

export function is<T extends SchemaType>(schema: T, value: unknown): value is TypeOf<T> {
  const issues = validate(schema, value)
  return issues.length === 0
}

export function asCode(schema: SchemaType): string {
  if (!isSchemaType(schema)) {
    throw new Error('Invalid schema')
  }

  if (isBooleanType(schema)) {
    return 'boolean'
  }

  if (isNullType(schema)) {
    return 'null'
  }

  if (isNumberType(schema)) {
    return 'number'
  }

  if (isStringType(schema)) {
    return 'string'
  }

  if (isUndefinedType(schema)) {
    return 'undefined'
  }

  if (isArrayType(schema)) {
    return `Array<${asCode(schema.items)}>`
  }

  if (isTupleType(schema)) {
    return `[${schema.items.map((item) => asCode(item)).join(', ')}]`
  }

  if (isObjectType(schema)) {
    const requiredProps = new Set(schema.required ?? [])
    const readonlyProps = new Set(
      Object.entries(schema.properties)
        .filter(([_, value]) => isReadonly(value))
        .map(([key]) => key),
    )

    const props = Object.keys(schema.properties).map((key) => {
      const readonly = readonlyProps.has(key) ? 'readonly ' : ''
      const optional = requiredProps.has(key) ? '' : '?'
      return `${readonly}${key}${optional}: ${asCode(schema.properties[key])}`
    })

    return `{${props.join('; ')}}`
  }

  throw new Error('Not implemented')
}
