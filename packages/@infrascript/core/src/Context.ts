import {AsyncLocalStorage} from 'async_hooks'

// This interface constrains the map keys to only store their corresponding Context instance type
interface StorageMap extends Map<typeof Context, AsyncLocalStorage<Context>> {
  get: <K extends typeof Context>(key: K) => AsyncLocalStorage<InstanceType<K>> | undefined
  set: <K extends typeof Context>(key: K, value: AsyncLocalStorage<InstanceType<K>>) => this
}

const classAsyncStorage = new Map<typeof Context, AsyncLocalStorage<Context>>() as StorageMap

function getClassStorage<T extends typeof Context>(klass: T): AsyncLocalStorage<InstanceType<T>> {
  const asyncLocalStorage = classAsyncStorage.get(klass) ?? new AsyncLocalStorage<InstanceType<T>>()
  classAsyncStorage.set(klass, asyncLocalStorage)
  return asyncLocalStorage
}

const ERROR_CONTEXT: unique symbol = Symbol('Error.context')

declare global {
  interface Error {
    [ERROR_CONTEXT]?: Context[]
  }
}

export class Context {
  static asyncLocalStorage = new AsyncLocalStorage<Context>()

  static current<T extends typeof Context>(this: T): InstanceType<T> {
    const currentContext = getClassStorage(this).getStore()

    if (currentContext === undefined) {
      throw new Error('missing context')
    }

    return currentContext
  }

  static fromError<T extends typeof Context>(error: Error): InstanceType<T>[] {
    const errorContexts = error[ERROR_CONTEXT] ?? []
    const relevantContexts = errorContexts.filter((context) => context instanceof this) as InstanceType<T>[]
    return relevantContexts
  }

  static get<T extends typeof Context, R>(this: T, fn: (current: InstanceType<T>) => R): R | undefined
  static get<T extends typeof Context, R>(this: T, fn: (current: InstanceType<T>) => R, defaultValue: R): R
  static get<T extends typeof Context, R>(
    this: T,
    fn: (current: InstanceType<T>) => R,
    defaultValue?: R,
  ): R | undefined {
    const currentContext = getClassStorage(this).getStore()
    if (currentContext !== undefined) {
      return fn(currentContext)
    }

    if (defaultValue !== undefined) {
      return defaultValue
    }

    return undefined
  }

  static runWithAll<C extends Context[], T>(contexts: C, fn: () => T): T {
    return [...contexts].reverse().reduce((runWithAll, context) => (): T => context.run(runWithAll), fn)()
  }

  #activeExecutions = 0

  get activeExecutions(): number {
    return this.#activeExecutions
  }

  hasActiveExecutions(): boolean {
    return this.#activeExecutions === 0
  }

  run<T>(fn: () => T): T {
    return getClassStorage(this.constructor as typeof Context).run(this, () => {
      this.#activeExecutions += 1
      try {
        return fn()
      } catch (error) {
        const err = error as Error
        err[ERROR_CONTEXT]?.push(this) ?? (err[ERROR_CONTEXT] = [this])
        throw err
      } finally {
        this.#activeExecutions -= 1
      }
    })
  }
}

// TODO: remove this once the @types/node types are updated

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'async_hooks' {
  /**
   * When having multiple instances of `AsyncLocalStorage`, they are independent
   * from each other. It is safe to instantiate this class multiple times.
   */
  class AsyncLocalStorage<T> {
    /**
     * This method disables the instance of `AsyncLocalStorage`. All subsequent calls
     * to `asyncLocalStorage.getStore()` will return `undefined` until
     * `asyncLocalStorage.run()` or `asyncLocalStorage.runSyncAndReturn()`
     * is called again.
     *
     * When calling `asyncLocalStorage.disable()`, all current contexts linked to the
     * instance will be exited.
     *
     * Calling `asyncLocalStorage.disable()` is required before the
     * `asyncLocalStorage` can be garbage collected. This does not apply to stores
     * provided by the `asyncLocalStorage`, as those objects are garbage collected
     * along with the corresponding async resources.
     *
     * This method is to be used when the `asyncLocalStorage` is not in use anymore
     * in the current process.
     */
    disable(): void

    /**
     * This method returns the current store.
     * If this method is called outside of an asynchronous context initialized by
     * calling `asyncLocalStorage.run` or `asyncLocalStorage.runAndReturn`, it will
     * return `undefined`.
     */
    getStore(): T | undefined

    /**
     * Calling `asyncLocalStorage.run(callback)` will run a function synchronously
     * within a context and return its return value. The store is not accessible
     * outside of the callback function or the asynchronous operations created
     * within the callback.
     *
     * Optionally, arguments can be passed to the function. They will be passed
     * to the callback function.
     *
     * If the callback function throws an error, it will be thrown by run too.
     * The stacktrace will not be impacted by this call and the context will be exited.
     */
    run<A extends any[], R>(store: T, callback: (...args: A) => void, ...args: A): R

    /**
     * Calling `asyncLocalStorage.exit(callback)` will create a new asynchronous
     * context.
     * Within the callback function and the asynchronous operations from the callback,
     * `asyncLocalStorage.getStore()` will return `undefined`.
     *
     * The callback will be ran asynchronously. Optionally, arguments can be passed
     * to the function. They will be passed to the callback function.
     *
     * If an error is thrown by the callback function, it will not be caught by
     * a `try/catch` block as the callback is ran in a new asynchronous resource.
     * Also, the stacktrace will be impacted by the asynchronous call.
     */
    exit(callback: (...args: any[]) => void, ...args: any[]): void

    /**
     * Calling `asyncLocalStorage.enterWith(store)` will transition into the context
     * for the remainder of the current synchronous execution and will persist
     * through any following asynchronous calls.
     */
    enterWith(store: T): void
  }
}
