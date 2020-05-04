export type Primitive = number | string
export type List = readonly Primitive[]
export type StringKeyOf<T> = Extract<keyof T, string>

export interface ConfigObject<T> {
  readonly __kind: T
}
