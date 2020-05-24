import {InfraScriptError} from './errors'

export type StringKeyOf<T> = Extract<keyof T, string>

export function assertNever(val: never): never {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  throw new InfraScriptError(`Unexpected value: ${val}`)
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
