import {Resource, ResourceContext} from './Resource'

export class Component extends Resource<{}> {
  #ctx = ResourceContext.current().clone()
  constructor(name: string) {
    super(name, {})
    this.#ctx.parent = this
  }

  protected get $ctx(): ResourceContext {
    return this.#ctx
  }

  propNames(): (keyof this)[] {
    const parentProperties = this.$parentProperties
    return Object.getOwnPropertyNames(this).filter((name) => !parentProperties.has(name)) as (keyof this)[]
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Resource> {
    yield this
    for (const prop of this.propNames()) {
      const value = this[prop]
      if (value instanceof Resource) {
        yield value
      }
    }
  }
}
