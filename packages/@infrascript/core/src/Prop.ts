import {Resource} from './Resource'

export type Prop<T> = T | Promise<T> | ReferenceProp<T> | PredictedProp<T>

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

  // eslint-disable-next-line @typescript-eslint/promise-function-async
  static wrap<T>(prop: Prop<T>, source: Resource): ReferenceProp<T> {
    if (prop instanceof ReferenceProp) {
      return prop
    }
    return new ReferenceProp<T>((resolve) => resolve(prop), source)
  }
}

/** References a value we are predicting will exist after deploy */
export class PredictedProp<T> extends Promise<T> {}
