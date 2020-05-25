import is from '@sindresorhus/is'
import * as fastCase from 'fast-case'
import {inspect} from 'util'
import {Context} from './Context'
import {DuplicateURNError} from './errors'
import {Graph} from './Graph'
import {Prop, ReferenceProp, WrappedValueOf} from './Prop'
import {keysOf, StringKeyOf} from './utils'

declare global {
  namespace Context {
    interface Data {
      ctx: CtxData
    }

    interface CtxData {
      globalRoot?: RootResource
      parent?: Resource
      globalURNs: Set<string>
    }
  }
}

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

export abstract class Resource<Props extends object = object> {
  #urn: string
  #name: string
  #parent: Resource
  #props: Props
  #children = new Set<Resource>()
  #childrenURNs = new Set<string>()
  #dependents = new Graph<Resource>()

  constructor(name: string, props: Props | (() => Props)) {
    this.#name = name
    this.#props = unwrapPropsFn(props)

    if (this.$sym === globalRootSymbol) {
      // Set parent to self (we are the global root) and adopt the current context
      this.#parent = this
      // console.log(Zone.current)
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
    for (const k of keysOf(this.#props)) {
      const prop = this.#props[k]
      if (prop instanceof ReferenceProp) {
        prop.source.#dependents.addEdge(prop.source, this)
      }
    }
  }

  protected [inspect.custom](): string {
    return `Resource ${inspect({$urn: this.$urn, ...this.#props})}`
  }

  // eslint-disable-next-line @typescript-eslint/promise-function-async
  protected $attr<T extends StringKeyOf<Props>>(key: T): ReferenceProp<WrappedValueOf<Props[T]>> {
    const prop = this.#props[key]
    return ReferenceProp.wrap(prop, this)
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

  async $asParent(fn: () => void | Promise<void>): Promise<void> {
    const childContext = ResourceContext.current().clone()
    await childContext.run(async () => {
      ResourceContext.current().parent = this
      return await fn()
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

interface ExampleResource1Props {
  prop1: Prop<number>
  prop2: Prop<string>
}

export class ExampleResource1 extends Resource<ExampleResource1Props> {
  get prop1(): ReferenceProp<number> {
    return this.$attr('prop1')
  }

  get prop2(): ReferenceProp<string> {
    return this.$attr('prop2')
  }
}

interface ExampleResource2Props {
  prop1: Prop<number>
  prop2: Prop<string>
}

export class ExampleResource2 extends Resource<ExampleResource2Props> {
  get prop1(): ReferenceProp<number> {
    return this.$attr('prop1')
  }

  get prop2(): ReferenceProp<string> {
    return this.$attr('prop2')
  }
}
