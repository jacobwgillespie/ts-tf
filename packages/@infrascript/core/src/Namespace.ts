import {inspect} from 'util'
import {Context} from './Context'
import {Entity} from './Entity'
import {Graph} from './Graph'
import {ReferenceProp} from './Prop'
import {Resource} from './Resource'

export class Namespace extends Entity {
  #root = false
  #subgraph = new Graph<Entity>()
  #childURNs = new Set<string>()

  static get root(): Namespace {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    root.#root = true
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return root
  }

  constructor(name: string) {
    super(name)
    this.#subgraph.addNode(this)

    // Hack, this should be abstracted
    if (name !== 'ROOT') {
      Namespace.root.#subgraph.addEdge(Namespace.root, this)
    }
  }

  protected [inspect.custom](): string {
    return `Namespace ${inspect({name: this.name})}`
  }

  isRoot(): boolean {
    return this.#root
  }

  get urn(): string {
    return `urn:infra:ns::${this.name}`
  }

  get graph(): Graph<Entity> {
    let flattened = this.#subgraph
    for (const node of flattened.nodes()) {
      if (node instanceof Namespace && node !== this) {
        flattened = Graph.merge(flattened, node.graph)
      }
    }
    return flattened
  }

  async withNamespace(fn: () => void | Promise<void>): Promise<void> {
    const ctx = Context.for('ctx')
    await ctx.run(async () => {
      ctx.set('namespace', this)
      return await fn()
    })
  }

  _registerResource(resource: Resource): void {
    this.#subgraph.addEdge(this, resource)
    this.#childURNs.add(resource.urn)
  }

  _registerReferenceProp<T>(prop: ReferenceProp<T>, destinationResource: Resource): void {
    this.#subgraph.addEdge(prop.source, destinationResource)
  }
}

const root = new Namespace('ROOT')
