import {Context} from './context'
import {Namespace} from './Namespace'
import {ExampleResource1, ExampleResource2} from './Resource'

async function run() {
  Context.for('ctx', {namespace: Namespace.root})

  const r1 = new ExampleResource1('resource', {prop1: 1, prop2: '2'})
  console.log(r1)

  const r2 = new ExampleResource2('resource2', {prop1: 1, prop2: r1.prop2})
  console.log(r2)

  const customNamespace = new Namespace('custom')
  await customNamespace.withNamespace(() => {
    const r3 = new ExampleResource1('resource', {prop1: 1, prop2: r1.prop2})
    console.log(r3)
  })

  console.log('nodes', Namespace.root.graph.nodes())
  console.log('edges', Namespace.root.graph.edges())
  console.log(Namespace.root.graph.dot((n) => n.urn))
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
