export function assertNever(val: never): never {
  throw new Error(`Unepected value: ${val}`)
}
