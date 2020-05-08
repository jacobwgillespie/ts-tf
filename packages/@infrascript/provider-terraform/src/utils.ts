/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
import prettierConfig from '@infrascript/config-prettier'
import prettier from 'prettier'

export function assertNever(val: never): never {
  throw new Error(`Unepected value: ${val}`)
}

export function formatTypeScript(code: string): string {
  return prettier.format(code, {...prettierConfig, parser: 'typescript'})
}
