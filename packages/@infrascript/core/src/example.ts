/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'source-map-support/register'
import {prettyPrintError} from '@infrascript/ui'
import {Context} from './Context'
import {Namespace} from './Namespace'
import {globalRoot, ResourceContext, URNContext, Resource} from './Resource'
import {Prop, ReferenceProp} from './Prop'

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

async function run() {
  const r1 = new ExampleResource1('resource', {prop1: 1, prop2: '2'})
  console.log(r1)

  const r2 = new ExampleResource2('resource2', {prop1: 1, prop2: r1.prop2})
  console.log(r2)

  const customNamespace = new Namespace('custom')
  customNamespace.$asParent(() => {
    const r3 = new ExampleResource1('resource', {prop1: 1, prop2: r1.prop2})
    console.log(r3)
  })

  const graph = globalRoot().$dependentsGraph
  // console.log('nodes', graph.nodes())
  // console.log('edges', graph.edges())
  console.log(graph.dot((n) => n.$urn))
}

const resourceCtx = new ResourceContext()
const urnContext = new URNContext()

Context.runWithAll([resourceCtx, urnContext], run).catch((error) => {
  prettyPrintError(error)
  process.exit(1)
})
