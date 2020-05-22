import {createHook, executionAsyncId, triggerAsyncId} from 'async_hooks'
import {isPromise} from '../utils'

const contexts = new Map<string, Context<unknown>>()

const ERROR_CONTEXT: unique symbol = Symbol('ERROR_CONTEXT')

declare global {
  interface Error {
    [ERROR_CONTEXT]?: Context<unknown>
  }
}

interface Layer<Data> {
  data: Data
}

export class Context<Data> {
  #name: string
  #currentLayer?: Layer<Data>
  #parentLayers: Layer<Data>[] = []
  #asyncExecutionLayers = new Map<number, Layer<Data>>()

  static for<Data>(name: string, initialData?: Data): Context<Data> {
    // If this context already exists, return the existing one
    const existing = contexts.get(name)
    if (existing) {
      return existing as Context<Data>
    }

    return new Context(name, initialData)
  }

  static fromError<Data>(error: Error): Context<Data> | undefined {
    return error?.[ERROR_CONTEXT] ? (error[ERROR_CONTEXT] as Context<Data>) : undefined
  }

  private constructor(name: string, initialData?: Data) {
    this.#name = name

    contexts.set(name, this as Context<unknown>)

    if (initialData !== undefined) {
      this.#currentLayer = {data: initialData}
    }

    const hook = createHook({
      init: (asyncID) => {
        if (this.#currentLayer) {
          this.#asyncExecutionLayers.set(asyncID, this.#currentLayer)
        } else if (executionAsyncId() === 0) {
          // executionAsyncId() is 0 when triggered from C++ (no JS context above)
          // https://github.com/nodejs/node/blob/master/doc/api/async_hooks.md#triggerasyncid
          const triggerAsyncID = triggerAsyncId()
          const triggerLayer = this.#asyncExecutionLayers.get(triggerAsyncID)
          if (triggerLayer) {
            this.#asyncExecutionLayers.set(asyncID, triggerLayer)
          }
        }
      },
      before: (asyncID) => {
        const context = this.#asyncExecutionLayers.get(asyncID)
        if (context) {
          this.#enter(context)
        }
      },
      after: (asyncID) => {
        const context = this.#asyncExecutionLayers.get(asyncID)
        if (context) {
          this.#exit(context)
        }
      },
      destroy: (asyncID) => {
        this.#asyncExecutionLayers.delete(asyncID)
      },
    })
    hook.enable()
  }

  get<Key extends keyof Data>(key: Key): Data[Key] {
    if (!this.#currentLayer) {
      throw new Error(`Context is not active`)
    }
    return this.#currentLayer.data[key]
  }

  set<Key extends keyof Data>(key: Key, value: Data[Key]): Data[Key] {
    if (!this.#currentLayer) {
      throw new Error(`Context is not active`)
    }
    this.#currentLayer.data[key] = value
    return value
  }

  run<T>(fn: () => T): T
  run<T>(fn: Promise<T>): Promise<T>
  run<T>(fn: (() => T) | Promise<T>): T | Promise<T> {
    const layer = this.#createLayer()
    this.#enter(layer)

    if (isPromise<T>(fn)) {
      return fn
        .then((result) => {
          this.#exit(layer)
          return result
        })
        .catch((error: Error) => {
          error[ERROR_CONTEXT] = this as Context<unknown>
          this.#exit(layer)
          throw error
        })
    }

    try {
      return fn()
    } catch (error) {
      const err = error as Error
      err[ERROR_CONTEXT] = this as Context<unknown>
      throw err
    } finally {
      this.#exit(layer)
    }
  }

  bind<T, A extends unknown[]>(fn: (...args: A) => T): (...args: A) => T {
    const layer = this.#currentLayer ?? this.#createLayer()
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ctx = this
    return function (this: unknown) {
      ctx.#enter(layer)
      try {
        // eslint-disable-next-line prefer-rest-params
        return Reflect.apply(fn, this, arguments) as T
      } catch (error) {
        const err = error as Error
        err[ERROR_CONTEXT] = ctx as Context<unknown>
        throw err
      } finally {
        ctx.#exit(layer)
      }
    }
  }

  destroy() {
    contexts.delete(this.#name)
  }

  #enter = (layer: Layer<Data>) => {
    if (this.#currentLayer) {
      this.#parentLayers.push(this.#currentLayer)
    }
    this.#currentLayer = layer
  }

  #exit = (layer: Layer<Data>) => {
    if (this.#currentLayer === layer) {
      const nextActive = this.#parentLayers.pop()
      this.#currentLayer = nextActive
      return
    }

    const index = this.#parentLayers.lastIndexOf(layer)
    if (index < 0) {
      throw new Error('Unable to exit context')
    }

    this.#parentLayers.splice(index, 1)
  }

  #createLayer = (): Layer<Data> => {
    return {
      data: Object.create(this.#currentLayer !== undefined ? this.#currentLayer.data : Object.prototype) as Data,
    }
  }
}
