/* eslint-disable @typescript-eslint/no-explicit-any */
import {DuplicateURNError, keysOf, StringKeyOf, UnwrapPromiseLike} from '@infrascript/types'
import is from '@sindresorhus/is'
import * as fastCase from 'fast-case'
import {inspect} from 'util'
import {Context} from './Context'
import {Graph} from './Graph'
import {Prop, PropInput} from './Prop'

export class URNContext extends Context {
  #urns = new Set<string>()

  register(urn: string): void {
    if (this.#urns.has(urn)) {
      throw new DuplicateURNError(urn)
    }
    this.#urns.add(urn)
  }
}

export class ResourceContext extends Context {
  globalRoot: RootResource | undefined = undefined
  parent: Resource | undefined = undefined

  clone(): ResourceContext {
    const clone = new ResourceContext()
    clone.globalRoot = this.globalRoot
    clone.parent = this.parent
    return clone
  }
}

function unwrapPropsFn<Props>(props: Props | (() => Props)): Props {
  if (is.function_(props)) {
    return props()
  }
  return props
}

const resourceSymbol = Symbol('resource')
const globalRootSymbol = Symbol('globalRoot')

export type PropInputObject = Record<string, PropInput<unknown>>
export abstract class Resource<InputProps extends PropInputObject = any> {
  #urn: string
  #name: string
  #parent: Resource
  #inputProps: InputProps
  #children = new Set<Resource>()
  #childrenURNs = new Set<string>()
  #dependents = new Graph<Resource>()

  constructor(name: string, props: InputProps | (() => InputProps)) {
    this.#name = name
    this.#inputProps = unwrapPropsFn(props)

    if (this.$sym === globalRootSymbol) {
      // Set parent to self (we are the global root) and adopt the current context
      this.#parent = this
      ResourceContext.current().parent = this
    } else {
      // Register this resource with the current context's parent
      this.#parent = ResourceContext.get((ctx) => ctx.parent, undefined) ?? globalRoot()
      this.#parent.#children.add(this)
      this.#parent.#childrenURNs.add(this.$urn)
      this.#parent.#dependents.addEdge(this.#parent, this)
    }

    this.#urn = `${this.#parent.$urn}${this.#parent.isRoot ? '://' : '/'}${this.$kind}:${this.$name}`

    URNContext.current().register(this.$urn)

    // Register any reference props with namespace
    for (const k of keysOf(this.#inputProps)) {
      const prop = this.#inputProps[k]
      if (Prop.isProp(prop) && prop.source) {
        prop.source.#dependents.addEdge(prop.source, this)
      }
    }
  }

  protected [inspect.custom](): string {
    return `Resource ${inspect({$urn: this.$urn, ...this.#inputProps})}`
  }

  protected $attr<T extends StringKeyOf<InputProps>>(key: T): Prop<UnwrapPromiseLike<InputProps[T]>> {
    const prop = this.#inputProps[key]
    return Prop.fromResource(prop, this)
  }

  protected get $kind(): string {
    return fastCase.camelize(this.constructor.name)
  }

  protected get $sym(): symbol {
    return resourceSymbol
  }

  get isRoot(): boolean {
    return this.#parent === this
  }

  get $name(): string {
    return this.#name
  }

  get $urn(): string {
    return this.#urn
  }

  get $dependentsGraph(): Graph<Resource> {
    let flattened = this.#dependents
    for (const node of this.#children) {
      const subgraph = node.$dependentsGraph
      if (!subgraph.isEmpty) {
        flattened = Graph.merge(flattened, subgraph)
      }
    }
    return flattened
  }

  $asParent<T>(fn: () => T): T {
    const childContext = ResourceContext.current().clone()
    return childContext.run(() => {
      ResourceContext.current().parent = this
      return fn()
    })
  }
}

/** RootResource is the root of all resources within a context */
class RootResource extends Resource<{}> {
  static get instance(): RootResource {
    return ResourceContext.get((ctx) => ctx.globalRoot, undefined) ?? new RootResource()
  }

  private constructor() {
    super('root', {})
    ResourceContext.current().globalRoot = this
  }

  protected get $sym(): symbol {
    return globalRootSymbol
  }

  // Returning a fixed URN effectively makes this a singleton, since no two
  // resources in the current context are allowed to share a URN within a context
  get $urn(): string {
    return 'infra'
  }
}

/** globalRoot returns the global root resource for the current context */
export function globalRoot(): RootResource {
  return RootResource.instance
}
