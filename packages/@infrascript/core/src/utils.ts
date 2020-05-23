/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
import prettierConfig from '@infrascript/config-prettier'
import prettier from 'prettier'

export type StringKeyOf<T> = Extract<keyof T, string>

export function assertNever(val: never): never {
  throw new Error(`Unexpected value: ${val}`)
}

export function formatTypeScript(code: string): string {
  return prettier.format(code, {...prettierConfig, parser: 'typescript'})
}

export function isPromise<T>(value: unknown): value is Promise<T> {
  if (typeof value !== 'object') {
    return false
  }

  if (value === null || value === undefined) {
    return false
  }

  return 'then' in value && 'catch' in value
}

export function keysOf<T>(value: T): StringKeyOf<T>[] {
  return Object.keys(value) as StringKeyOf<T>[]
}