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
}
