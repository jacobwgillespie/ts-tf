export type Primitive = number | string
export type List = Primitive[]
export type StringKeyOf<T> = Extract<keyof T, string>

export interface ConfigObject<T> {
  __kind: T
}
