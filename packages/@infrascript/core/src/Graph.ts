export class Graph<Node> {
  #nodes = new Set<Node>()
  #edges = new Map<Node, Set<Node>>()
  #isEmpty = true

  get isEmpty(): boolean {
    return this.#isEmpty
  }

  addNode(node: Node): void {
    this.#isEmpty = false
    this.#nodes.add(node)
  }

  addEdge(from: Node, to: Node): void {
    this.#isEmpty = false
    this.addNode(from)
    this.addNode(to)
    const nodeEdges = this.#edges.get(from) ?? new Set()
    nodeEdges.add(to)
    this.#edges.set(from, nodeEdges)
  }

  nodes(): ReadonlySet<Node> {
    return this.#nodes
  }

  edges(): ReadonlyMap<Node, ReadonlySet<Node>> {
    return this.#edges
  }

  dot(nodeName: (node: Node) => string): string {
    const lines: string[] = []

    for (const [node, edges] of this.#edges) {
      for (const edge of edges) {
        lines.push(`"${nodeName(node)}" -> "${nodeName(edge)}";`)
      }
    }

    return `digraph {
  ${lines.join('\n  ')}
}`
  }

  static merge<T>(a: Graph<T>, b: Graph<T>): Graph<T> {
    const combined = new Graph<T>()

    for (const node of a.#nodes) {
      combined.addNode(node)
    }

    for (const node of b.#nodes) {
      combined.addNode(node)
    }

    for (const [node, edges] of a.#edges) {
      for (const edge of edges) {
        combined.addEdge(node, edge)
      }
    }

    for (const [node, edges] of b.#edges) {
      for (const edge of edges) {
        combined.addEdge(node, edge)
      }
    }

    return combined
  }

  static copy<T>(a: Graph<T>): Graph<T> {
    return Graph.merge(a, new Graph())
  }
}
