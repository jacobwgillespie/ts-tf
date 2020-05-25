export function assertNever(val: never): never {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  throw new Error(`Unexpected value: ${val}`)
}

export type StringKeyOf<T> = Extract<keyof T, string>
