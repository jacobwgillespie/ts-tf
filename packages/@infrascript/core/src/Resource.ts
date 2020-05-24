import is from '@sindresorhus/is'
import {inspect} from 'util'
import {Context} from './Context'
import {Entity} from './Entity'
import {Graph} from './Graph'
import {Prop, ReferenceProp, WrappedValueOf} from './Prop'
import {keysOf, StringKeyOf} from './utils'

declare global {
  namespace Context {
    interface Data {
      ctx: CtxData
    }

    interface CtxData {
      parent: Resource
    }
  }
}

function unwrapPropsFn<Props>(props: Props | (() => Props)): Props {
  if (is.function_(props)) {
    return props()
  }
  return props
}

export const resourceSymbol = Symbol('resource')
export const rootSymbol = Symbol('root')

export abstract class Resource<Props extends object = object> extends Entity {
  abstract get kind(): string
  protected get $sym(): symbol {
    return resourceSymbol
  }

  #parent: Resource
  #props: Props

  #children = new Set<Resource>()
  #childrenURNs = new Set<string>()

  #dependents = new Graph<Resource>()

  constructor(name: string, props: Props | (() => Props)) {
    super(name)
    const ctx = Context.for('ctx')

    const isRoot = this.$sym === rootSymbol
    this.#parent = isRoot ? this : ctx.get('parent')
    this.#props = unwrapPropsFn(props)

    // Register this resource with the current context's parent
    if (!isRoot) {
      this.#parent.#children.add(this)
      this.#parent.#childrenURNs.add(this.urn)
      this.#parent.#dependents.addEdge(this.#parent, this)
    }

    // Register any reference props with namespace
    for (const k of keysOf(this.#props)) {
      const prop = this.#props[k]
      if (prop instanceof ReferenceProp) {
        prop.source.#dependents.addEdge(prop.source, this)
      }
    }

    if (isRoot) {
      ctx.set('parent', this)
    }
  }

  protected [inspect.custom](): string {
    return `Resource ${inspect({$urn: this.urn, ...this.#props})}`
  }

  // eslint-disable-next-line @typescript-eslint/promise-function-async
  protected attr<T extends StringKeyOf<Props>>(key: T): ReferenceProp<WrappedValueOf<Props[T]>> {
    const prop = this.#props[key]
    return ReferenceProp.wrap(prop, this)
  }

  get isRoot(): boolean {
    return this.#parent === this
  }

  get urn(): string {
    return `urn:infra:${this.#parent.name}:resource::${this.kind}/${this.name}`
  }

  get dependentsGraph(): Graph<Resource> {
    let flattened = this.#dependents
    for (const node of this.#children) {
      const subgraph = node.dependentsGraph
      if (!subgraph.isEmpty) {
        flattened = Graph.merge(flattened, subgraph)
      }
    }
    return flattened
  }

  async asParent(fn: () => void | Promise<void>): Promise<void> {
    const ctx = Context.for('ctx')
    await ctx.run(async () => {
      ctx.set('parent', this)
      return await fn()
    })
  }
}

export const rootURN = 'urn:infra:ROOT'

export class RootResource extends Resource<{}> {
  static instance = new RootResource()

  private constructor() {
    super('root', {})
  }

  protected get $sym(): symbol {
    return rootSymbol
  }

  get kind(): 'root' {
    return 'root'
  }

  // Returning a fixed URN effectively makes this a singleton, since
  // no two resources in the current context are allowed to share a URN
  get urn(): string {
    return rootURN
  }
}

export const root = RootResource.instance

interface ExampleResource1Props {
  prop1: Prop<number>
  prop2: Prop<string>
}

export class ExampleResource1 extends Resource<ExampleResource1Props> {
  get kind(): 'ExampleResource1' {
    return 'ExampleResource1'
  }

  get prop1(): ReferenceProp<number> {
    return this.attr('prop1')
  }

  get prop2(): ReferenceProp<string> {
    return this.attr('prop2')
  }
}

interface ExampleResource2Props {
  prop1: Prop<number>
  prop2: Prop<string>
}

export class ExampleResource2 extends Resource<ExampleResource2Props> {
  get kind(): 'ExampleResource2' {
    return 'ExampleResource2'
  }

  get prop1(): ReferenceProp<number> {
    return this.attr('prop1')
  }

  get prop2(): ReferenceProp<string> {
    return this.attr('prop2')
  }
}
