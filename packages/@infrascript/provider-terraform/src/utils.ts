/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

export function assertNever(val: never): never {
  throw new Error(`Unepected value: ${val}`)
}
