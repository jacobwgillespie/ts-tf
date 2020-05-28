import {Resource, ResourceContext} from './Resource'

// Things that produce a resource
type ResourceProducers = Resource | (() => Resource)

// Props for the child class that produce resources
type ChildProps<T extends Component, R = ResourceProducers> = ChildPropsInner<T, Exclude<keyof T, keyof Component>, R>
type ChildPropsInner<T extends Component, K extends Exclude<keyof T, keyof Component>, R = ResourceProducers> = {
  [k in K]: T[k] extends R ? k : never
}[K]

export class Component extends Resource<{}> {
  #ctx = ResourceContext.current().clone()
  constructor(name: string) {
    super(name, {})
    this.#ctx.parent = this
  }

  protected get $ctx(): ResourceContext {
    return this.#ctx
  }

  propNames<T extends Component>(this: T): ChildProps<T>[] {
    const parentProperties = this.$parentProperties
    return Object.getOwnPropertyNames(this).filter((name) => !parentProperties.has(name)) as ChildProps<T>[]
  }

  localProperties(): void {
    console.log(Object.getOwnPropertyDescriptors(this))
    console.log(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(this)))
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
