import {createHook, executionAsyncId, triggerAsyncId} from 'async_hooks'
import {inspect} from 'util'
import {ContextMissingError, DuplicateContextDataError, InfraScriptError} from './errors'
import {isPromise, StringKeyOf} from './utils'

const ERROR_CONTEXT: unique symbol = Symbol('ERROR_CONTEXT')

// This interface constrains the map keys to only store their corresponding Context instance type
interface ContextMap extends Map<ContextName, Context<ContextName>> {
  get: <K extends ContextName>(key: K) => Context<K> | undefined
  set: <K extends ContextName>(key: K, value: Context<K>) => this
}

declare global {
  interface Error {
    [ERROR_CONTEXT]?: ContextMap
  }

  namespace Context {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Data {}
  }
}

type ContextName = StringKeyOf<Context.Data>
type ContextData<Name extends ContextName> = Context.Data[Name]

const allContexts = new Map<string, Context<ContextName>>() as ContextMap

export class Context<Name extends ContextName> {
  #name: Name
  #receivedInitialData = false
  #currentLayer?: ContextData<Name>
  #parentLayers: ContextData<Name>[] = []
  #asyncExecutionLayers = new Map<number, ContextData<Name>>()

  static for<Name extends ContextName>(name: Name, initialData?: ContextData<Name>): Context<Name> {
    // If this context already exists, return the existing one
    const ctx = allContexts.get(name)

    if (ctx === undefined) {
      return new Context(name, initialData)
    }

    if (initialData !== undefined) {
      if (ctx.#receivedInitialData) {
        throw new DuplicateContextDataError(ctx.name)
      }
      ctx.#currentLayer = ctx.#createLayer(initialData)
      ctx.#receivedInitialData = true
    }

    return ctx
  }

  static fromError<Name extends ContextName>(name: Name, error: Error): Context<Name> | undefined {
    return error?.[ERROR_CONTEXT]?.get(name)
  }

  private constructor(name: Name, initialData?: ContextData<Name>) {
    this.#name = name

    allContexts.set(name, this)

    if (initialData !== undefined) {
      this.#currentLayer = this.#createLayer(initialData)
      this.#receivedInitialData = true
    }

    const hook = createHook({
      init: (asyncID) => {
        if (this.#currentLayer !== undefined) {
          this.#asyncExecutionLayers.set(asyncID, this.#currentLayer)
        } else if (executionAsyncId() === 0) {
          // executionAsyncId() is 0 when triggered from C++ (no JS context above)
          // https://github.com/nodejs/node/blob/master/doc/api/async_hooks.md#triggerasyncid
          const triggerAsyncID = triggerAsyncId()
          const triggerLayer = this.#asyncExecutionLayers.get(triggerAsyncID)
          if (triggerLayer !== undefined) {
            this.#asyncExecutionLayers.set(asyncID, triggerLayer)
          }
        }
      },
      before: (asyncID) => {
        const context = this.#asyncExecutionLayers.get(asyncID)
        if (context !== undefined) {
          this.#enter(context)
        }
      },
      after: (asyncID) => {
        const context = this.#asyncExecutionLayers.get(asyncID)
        if (context !== undefined) {
          this.#exit(context)
        }
      },
      destroy: (asyncID) => {
        this.#asyncExecutionLayers.delete(asyncID)
      },
    })
    hook.enable()
  }

  protected [inspect.custom](): string {
    return `Resource ${inspect(this.#currentLayer)}`
  }

  get name(): string {
    return this.#name
  }

  get<Key extends keyof ContextData<Name>>(key: Key): ContextData<Name>[Key] {
    if (this.#currentLayer === undefined) {
      throw new ContextMissingError()
    }
    return this.#currentLayer[key]
  }

  set<Key extends keyof ContextData<Name>>(key: Key, value: ContextData<Name>[Key]): ContextData<Name>[Key] {
    if (this.#currentLayer === undefined) {
      throw new ContextMissingError()
    }
    this.#currentLayer[key] = value
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
    allContexts.delete(this.#name)
  }

  #enter = (layer: ContextData<Name>): void => {
    if (this.#currentLayer !== undefined) {
      this.#parentLayers.push(this.#currentLayer)
    }
    this.#currentLayer = layer
  }

  #exit = (layer: ContextData<Name>): void => {
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

  #createLayer = (source: ContextData<Name> | undefined = this.#currentLayer): ContextData<Name> => {
    console.log('creating layer for', source)
    return Object.create(source !== undefined ? source : Object.prototype) as ContextData<Name>
  }

  #wrapError = (error: Error): Error => {
    const errorContext = error[ERROR_CONTEXT] ?? new Map()
    errorContext.set(this.#name, this)
    error[ERROR_CONTEXT] = errorContext
    return error
  }
}
