/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'source-map-support/register'
import is from '@sindresorhus/is'
import {prettyPrintError} from '@infrascript/ui'
import {Context} from './Context'
import {Namespace} from './Namespace'
import {globalRoot, ResourceContext, URNContext, Resource} from './Resource'
import {Prop, Input} from './Prop'

type ExampleResource1Inputs = {
  prop1: Input<number>
  prop2: Input<string>
}

export class ExampleResource1 extends Resource<ExampleResource1Inputs> {
  get prop1(): Prop<number> {
    return this.$attr('prop1')
  }

  get prop2(): Prop<string> {
    return this.$attr('prop2')
  }
}

type ExampleResource2Inputs = {
  prop1: Input<number>
  prop2: Input<string>
}

export class ExampleResource2 extends Resource<ExampleResource2Inputs> {
  get prop1(): Prop<number> {
    return this.$attr('prop1')
  }

  get prop2(): Prop<string> {
    return this.$attr('prop2')
  }
}

async function* run() {
  const r1 = new ExampleResource1('resource', {prop1: 1, prop2: '2'})
  yield r1

  const r2 = new ExampleResource2('resource2', {prop1: 1, prop2: r1.prop2})
  yield r2

  const customNamespace = new Namespace('custom')
  yield customNamespace.$run(function* () {
    const r3 = new ExampleResource1('resource', {prop1: 1, prop2: Promise.resolve('2')})
    yield r3
  })
}

async function* flatten<T>(
  generator: Generator<T | Generator<T> | AsyncGenerator<T>> | AsyncGenerator<T | Generator<T> | AsyncGenerator<T>>,
): AsyncGenerator<T> {
  for await (const item of generator) {
    if (is.generator(item)) {
      yield* flatten(item)
    } else if (is.asyncGenerator(item)) {
      yield* flatten(item)
    } else {
      yield item
    }
  }
}

const resourceCtx = new ResourceContext()
const urnContext = new URNContext()

async function generate() {
  const app = flatten(run())
  for await (const resource of app) {
    console.log('got a resource', resource)
  }

  const graph = globalRoot().$dependentsGraph
  console.log(graph.dot((n) => n.$urn))
}

Context.runWithAll([resourceCtx, urnContext], generate).catch((error) => {
  prettyPrintError(error)
  process.exit(1)
})
