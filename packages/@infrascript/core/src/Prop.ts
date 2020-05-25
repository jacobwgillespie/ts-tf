import {UnwrapPromiseLike} from '@infrascript/types'
import {Resource} from './Resource'

export type UnwrapProp<T> = T extends Prop<infer U> ? U : T
export type PropInput<T> = T | PromiseLike<T>

// These globals temporarily hold inner promise executor references
let resolve: (value?: unknown | PromiseLike<unknown>) => void
let reject: (reason?: unknown) => void

export class Prop<T = unknown> extends Promise<T> implements PromiseLike<T> {
  static of<T>(value: T | PromiseLike<T>): Prop<T> {
    const p = new this<T>()
    p.resolve(value)
    return p
  }

  static future<T>(): Prop<T> {
    return new this<T>()
  }

  static isProp(value: unknown): value is Prop {
    return value instanceof this
  }

  static fromResource<T>(value: T | PromiseLike<T> | Prop<T>, source: Resource): Prop<UnwrapPromiseLike<T>> {
    const p = new this<UnwrapPromiseLike<T>>(source)
    // TODO: This type cast is necessary because TypeScript does not currently
    // capture promise unwrapping, however in an upcoming release it will
    // support an `awaited` type that will replace this workaround
    p.resolve(value as UnwrapPromiseLike<T>)
    return p
  }

  #source: Resource | undefined
  #resolved = false
  #resolve: (value?: T | PromiseLike<T>) => void
  #reject: (reason?: Error) => void

  protected constructor(source?: Resource) {
    super((innerResolve, innerReject) => {
      resolve = innerResolve as (value?: unknown | PromiseLike<unknown>) => void
      reject = innerReject
    })
    this.#source = source
    this.#resolve = resolve
    this.#reject = reject
  }

  get source(): Resource | undefined {
    return this.#source
  }

  resolve(value: T | PromiseLike<T>): void {
    if (this.#resolved) {
      throw new Error('Prop already resolved')
    }
    this.#resolve(value)
    this.#resolved = true
  }

  reject(reason: Error): void {
    this.#reject(reason)
  }
}
