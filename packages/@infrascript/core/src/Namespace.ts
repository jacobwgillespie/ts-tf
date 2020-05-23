import {Entity} from './Entity'
import {Graph} from './Graph'
import {ReferenceProp} from './Prop'
import {Resource} from './Resource'
import {Context} from './context'

export class Namespace extends Entity {
  #root = false
  #graph = new Graph<Entity>()
  #childURNs = new Set<string>()

  static get root(): Namespace {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    root.#root = true
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return root
  }

  constructor(name: string) {
    super(name)
    this.#graph.addNode(this)
  }

  isRoot(): boolean {
    return this.#root
  }

  get graph(): Graph<Entity> {
    return this.#graph
  }

  async withNamespace(fn: () => void | Promise<void>): Promise<void> {
    const ctx = Context.for('ctx')
    await ctx.run(async () => {
      ctx.set('namespace', this)
      return await fn()
    })
  }

  _registerResource(resource: Resource): void {
    if (this.#childURNs.has(resource.urn)) {
      throw new Error(`Duplicate resource name: ${resource.name}`)
    }

    this.#graph.addEdge(this, resource)
    this.#childURNs.add(resource.urn)
  }

  _registerReferenceProp<T>(prop: ReferenceProp<T>, destinationResource: Resource): void {
    this.#graph.addEdge(prop.source, destinationResource)
  }
}

const root = new Namespace('@root@')
