import {Context} from './context'
import {Namespace} from './Namespace'
import {ExampleResource1, ExampleResource2} from './Resource'

Context.for('ctx', {prefix: '', namespace: Namespace.root})

const r = new ExampleResource1('resource', {prop1: 1, prop2: '2'})
console.log(r)

const r2 = new ExampleResource2('resource2', {prop1: 1, prop2: r.prop2})
console.log(r2)

console.log('nodes', Namespace.root.graph.nodes())
console.log('edges', Namespace.root.graph.edges())
