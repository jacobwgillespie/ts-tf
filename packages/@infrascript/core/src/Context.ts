import {createHook, executionAsyncId, triggerAsyncId} from 'async_hooks'
import {ContextMissingError, InfraScriptError} from './errors'
import {isPromise} from './utils'

const contexts = new Map<string, Context<string, unknown>>()

const ERROR_CONTEXT: unique symbol = Symbol('ERROR_CONTEXT')

declare global {
  interface Error {
    [ERROR_CONTEXT]?: Map<string, Context<string, unknown>>
  }

  namespace Context {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Data {}
  }
}

interface Layer<Data> {
  data: Data
}

type DataType<Name> = Name extends keyof Context.Data ? Context.Data[Name] : object

export class Context<Name extends string, Data = Name extends keyof Context.Data ? Context.Data[Name] : object> {
  #name: string
  #currentLayer?: Layer<Data>
  #parentLayers: Layer<Data>[] = []
  #asyncExecutionLayers = new Map<number, Layer<Data>>()

  static for<Name extends string>(name: Name, initialData?: DataType<Name>): Context<Name, DataType<Name>> {
    // If this context already exists, return the existing one
    const existing = contexts.get(name)
    if (existing) {
      return existing as Context<Name, DataType<Name>>
    }

    return new Context(name, initialData)
  }

  static fromError<Name extends string>(name: Name, error: Error): Context<Name, DataType<Name>> | undefined {
    const context = error?.[ERROR_CONTEXT]?.get(name)
    return context ? (context as Context<Name, DataType<Name>>) : undefined
  }

  private constructor(name: Name, initialData?: Data) {
    this.#name = name

    contexts.set(name, this as Context<Name, unknown>)

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
      throw new ContextMissingError()
    }
    return this.#currentLayer.data[key]
  }

  set<Key extends keyof Data>(key: Key, value: Data[Key]): Data[Key] {
    if (!this.#currentLayer) {
      throw new ContextMissingError()
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
          this.#exit(layer)
          throw this.#wrapError(error)
        })
    }

    try {
      return fn()
    } catch (error) {
      throw this.#wrapError(error as Error)
    } finally {
      this.#exit(layer)
    }
  }

  bind<T, A extends unknown[]>(fn: (...args: A) => T): (...args: A) => T {
    const layer = this.#currentLayer ?? this.#createLayer()
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ctx = this
    return function (this: unknown): T {
      ctx.#enter(layer)
      try {
        // eslint-disable-next-line prefer-rest-params
        return Reflect.apply(fn, this, arguments) as T
      } catch (error) {
        throw ctx.#wrapError(error as Error)
      } finally {
        ctx.#exit(layer)
      }
    }
  }

  destroy(): void {
    contexts.delete(this.#name)
  }

  #enter = (layer: Layer<Data>): void => {
    if (this.#currentLayer) {
      this.#parentLayers.push(this.#currentLayer)
    }
    this.#currentLayer = layer
  }

  #exit = (layer: Layer<Data>): void => {
    if (this.#currentLayer === layer) {
      const nextActive = this.#parentLayers.pop()
      this.#currentLayer = nextActive
      return
    }

    const index = this.#parentLayers.lastIndexOf(layer)
    if (index < 0) {
      throw new InfraScriptError('Unable to exit context')
    }

    this.#parentLayers.splice(index, 1)
  }

  #createLayer = (): Layer<Data> => {
    return {
      data: Object.create(this.#currentLayer !== undefined ? this.#currentLayer.data : Object.prototype) as Data,
    }
  }

  #wrapError = (error: Error): Error => {
    const errorContext = error[ERROR_CONTEXT] ?? new Map()
    errorContext.set(this.#name, this as Context<string, unknown>)
    error[ERROR_CONTEXT] = errorContext
    return error
  }
}
