/* eslint-disable @typescript-eslint/no-explicit-any */

import {Zone} from './Zone'

const CONTEXT_KEY = 'infrascript:context'

export class Context {
  static stack<T extends typeof Context>(this: T): InstanceType<T>[] {
    const stack: InstanceType<T>[] = []

    let zone: Zone | null = Zone.current
    while (zone) {
      const definingZone = zone.getZoneWith(CONTEXT_KEY)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const context = zone.get(CONTEXT_KEY)

      if (definingZone === zone && context instanceof this) {
        stack.push(context as InstanceType<T>)
      }

      zone = zone.parent
    }

    return stack
  }

  static current<T extends typeof Context>(this: T): InstanceType<T> {
    const currentContext = this.stack()[0] as InstanceType<T> | undefined

    if (currentContext === undefined) {
      throw new Error('missing context')
    }

    return currentContext
  }

  static get<T extends typeof Context, R>(
    this: T,
    fn: (current: InstanceType<T>) => R,
    defaultValue?: R,
  ): R | undefined {
    const currentContext = this.stack()[0] as InstanceType<T> | undefined
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
    const contextZone = Zone.fork('InfraScriptContext', {
      [CONTEXT_KEY]: this,
    })

    return contextZone.run(() => {
      this.#activeExecutions += 1
      try {
        return fn()
      } finally {
        this.#activeExecutions -= 1
      }
    })
  }
}
