/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {InfraScriptError, isPromise} from '@infrascript/types'
import {createHook, executionAsyncId, triggerAsyncId} from 'async_hooks'
import {inspect} from 'util'

const ERROR_ZONE: unique symbol = Symbol('Error.zone')

declare global {
  interface Error {
    [ERROR_ZONE]?: Zone
  }
}

let currentZone: Zone | undefined = undefined
const parentLayers: Zone[] = []
const asyncExecutionLayers = new Map<number, Zone>()

const hook = createHook({
  init: (asyncID) => {
    if (currentZone !== undefined) {
      asyncExecutionLayers.set(asyncID, currentZone)
    } else if (executionAsyncId() === 0) {
      // executionAsyncId() is 0 when triggered from C++ (no JS context above)
      // https://github.com/nodejs/node/blob/master/doc/api/async_hooks.md#triggerasyncid
      const triggerAsyncID = triggerAsyncId()
      const triggerLayer = asyncExecutionLayers.get(triggerAsyncID)
      if (triggerLayer !== undefined) {
        asyncExecutionLayers.set(asyncID, triggerLayer)
      }
    }
  },
  before: (asyncID) => {
    const context = asyncExecutionLayers.get(asyncID)
    if (context !== undefined) {
      enter(context)
    }
  },
  after: (asyncID) => {
    const context = asyncExecutionLayers.get(asyncID)
    if (context !== undefined) {
      exit(context)
    }
  },
  destroy: (asyncID) => {
    asyncExecutionLayers.delete(asyncID)
  },
})
hook.enable()

function enter(zone: Zone): void {
  if (currentZone !== undefined) {
    parentLayers.push(currentZone)
  }
  currentZone = zone
}

function exit(zone: Zone): void {
  if (currentZone === zone) {
    const nextActive = parentLayers.pop()
    currentZone = nextActive
    return
  }

  const index = parentLayers.lastIndexOf(zone)
  if (index < 0) {
    throw new InfraScriptError('Unable to exit context')
  }

  parentLayers.splice(index, 1)
}

function wrapError(error: Error): Error {
  error[ERROR_ZONE] = currentZone
  return error
}

let rootZone: Zone

export class Zone {
  static get current(): Zone {
    if (currentZone === undefined) {
      return Zone.root
    }
    return currentZone
  }

  static fork(name: string, props: Record<string, any> = {}): Zone {
    return new Zone(name, currentZone ?? null, props)
  }

  static get root(): Zone {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    rootZone = rootZone ?? new Zone('<root>', null)
    return rootZone
  }

  run<T>(fn: () => T): T
  run<T>(fn: Promise<T>): Promise<T>
  run<T>(fn: (() => T) | Promise<T>): T | Promise<T> {
    enter(this)

    if (isPromise<T>(fn)) {
      return fn
        .then((result) => {
          exit(this)
          return result
        })
        .catch((error: Error) => {
          exit(this)
          throw wrapError(error)
        })
    }

    try {
      return fn()
    } catch (error) {
      throw wrapError(error as Error)
    } finally {
      exit(this)
    }
  }

  #name: string
  #properties: Record<string, any> = {}
  #parent: Zone | null

  private constructor(name: string, parent: Zone | null = null, properties: Record<string, any> = {}) {
    this.#name = name
    this.#parent = parent
    this.#properties = properties
  }

  get parent(): Zone | null {
    return this.#parent
  }

  get(key: string): any {
    if (key in this.#properties) {
      return this.#properties[key]
    }

    const parent = this.#parent
    if (parent) {
      return parent.get(key)
    }

    return undefined
  }

  getZoneWith(key: string): Zone | undefined {
    if (key in this.#properties) {
      return this
    }

    const parent = this.#parent
    if (parent) {
      return parent.getZoneWith(key)
    }

    return undefined
  }

  protected [inspect.custom](): string {
    return `Zone ${inspect({name: this.#name, parent: this.#parent, properties: this.#properties})}`
  }
}
