import 'source-map-support/register'

import {Namespace} from './Namespace'
import {ExampleResource1, ExampleResource2, globalRoot} from './Resource'

async function run() {
  const r1 = new ExampleResource1('resource', {prop1: 1, prop2: '2'})
  console.log(r1)

  const r2 = new ExampleResource2('resource2', {prop1: 1, prop2: r1.prop2})
  console.log(r2)

  const customNamespace = new Namespace('custom')
  await customNamespace.$asParent(() => {
    const r3 = new ExampleResource1('resource', {prop1: 1, prop2: r1.prop2})
    console.log(r3)
  })

  const graph = globalRoot().$dependentsGraph
  console.log('nodes', graph.nodes())
  console.log('edges', graph.edges())
  console.log(graph.dot((n) => n.$urn))
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
