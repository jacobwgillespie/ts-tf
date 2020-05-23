export class Graph<Node> {
  #nodes = new Set<Node>()
  #edges = new Map<Node, Set<Node>>()

  addNode(node: Node): void {
    this.#nodes.add(node)
  }

  addEdge(from: Node, to: Node): void {
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
