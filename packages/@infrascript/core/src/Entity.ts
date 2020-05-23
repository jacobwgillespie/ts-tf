import {Context} from './Context'
import {DuplicateURNError} from './errors'

declare global {
  namespace Context {
    interface Data {
      ctx: CtxData
    }

    interface CtxData {
      globalURNs: Set<string>
    }
  }
}

export class Entity {
  #name: string
  #ctx = Context.for('ctx')

  constructor(name: string) {
    this.#name = name

    const globalURNs = this.#ctx.get('globalURNs')
    if (globalURNs.has(this.urn)) {
      throw new DuplicateURNError(this.urn)
    }
  }

  get name(): string {
    return this.#name
  }

  get urn(): string {
    return `urn:infra:entity::${this.#name}`
  }
}
