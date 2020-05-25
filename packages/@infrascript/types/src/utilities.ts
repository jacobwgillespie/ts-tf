import {StringKeyOf} from './types'

export function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && value.constructor === Object
}

export function isPromise<T>(value: unknown): value is Promise<T> {
  if (typeof value !== 'object') {
    return false
  }

  if (value === null) {
    return false
  }

  return 'then' in value && 'catch' in value
}

export function keysOf<T>(value: T): StringKeyOf<T>[] {
  return Object.keys(value) as StringKeyOf<T>[]
}
