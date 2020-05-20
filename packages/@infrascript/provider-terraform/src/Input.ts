import {Output} from './Output'

export type Input<T> = T | Promise<T> | Output<T>

export type Unwrap<T> = T extends Promise<infer U>
  ? U extends Output<infer U2>
    ? UnwrapPrimitive<U2>
    : UnwrapPrimitive<U>
  : T extends Output<infer U1>
  ? UnwrapPrimitive<U1>
  : UnwrapPrimitive<T>

type primitive = Function | string | number | boolean | undefined | null

export type UnwrapPrimitive<T> = T extends primitive
  ? T
  : T extends Array<infer U>
  ? Unwrap<U>[]
  : T extends object
  ? {
      [K in keyof T]: Unwrap<T[K]>
    }
  : never

// export interface UnwrappedArray<T> extends Array<Unwrap<T>> {}

// export type UnwrappedObject<T> =

declare const thing: Unwrap<{a: Output<string>[]}>

const a = thing.a
