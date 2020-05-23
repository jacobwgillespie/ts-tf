import {Resource} from './Resource'

export type Prop<T = unknown> = T | Promise<T> | ReferenceProp<T> | PredictedProp<T>

export type WrappedValueOf<T> = T extends Prop<infer U> ? U : T

/** References an output of another resource */
export class ReferenceProp<T> extends Promise<T> {
  source: Resource

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void,
    source: Resource,
  ) {
    super(executor)
    this.source = source
  }

  // TODO: The casts in this method are due to TypeScript not currently supporting promise unwrapping
  // They can be removed when TypeScript's `awaited` type lands in an upcoming version
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  static wrap<ValueType>(prop: Prop<ValueType>, source: Resource): ReferenceProp<WrappedValueOf<ValueType>> {
    if (prop instanceof ReferenceProp) {
      return prop as ReferenceProp<WrappedValueOf<ValueType>>
    }
    return new ReferenceProp((resolve) => resolve(prop as Prop<WrappedValueOf<ValueType>>), source)
  }
}

/** References a value we are predicting will exist after deploy */
export class PredictedProp<T> extends Promise<T> {}
