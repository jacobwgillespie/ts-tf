export type Primitive = number | string
export type List = Primitive[]
export type StringKeyOf<T> = Extract<keyof T, string>
