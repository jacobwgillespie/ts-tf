/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'source-map-support/register'
import {DuplicateURNError} from '@infrascript/types'
import {prettyPrintError} from '@infrascript/ui'
import is from '@sindresorhus/is'
import {Component} from './Component'
import {Context} from './Context'
import {Namespace} from './Namespace'
import {Input, Prop} from './Prop'
import {globalRoot, Resource, ResourceContext, URNContext} from './Resource'

type ExampleResource1Inputs = {
  prop1: Input<number>
  prop2: Input<string>
}

class ExampleResource1 extends Resource<ExampleResource1Inputs> {
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

class ExampleResource2 extends Resource<ExampleResource2Inputs> {
  get prop1(): Prop<number> {
    return this.$attr('prop1')
  }

  get prop2(): Prop<string> {
    return this.$attr('prop2')
  }
}

class ExampleComponent extends Component {
  resource1 = new ExampleResource1('inside-component', {prop1: 123, prop2: '123'})

  example() {
    return new ExampleResource1('inside-component', {prop1: 123, prop2: '123'})
  }

  get example2() {
    return new ExampleResource1('inside-component', {prop1: 123, prop2: '123'})
  }
}

async function* run() {
  const r1 = new ExampleResource1('resource', {prop1: 1, prop2: '2'})
  yield r1

  const r2 = new ExampleResource2('resource2', {prop1: 1, prop2: r1.prop2})
  yield r2

  yield new Namespace('custom', async function* () {
    const r3 = new ExampleResource1('resource', {prop1: 1, prop2: Promise.resolve('2')})
    yield r3
  })

  const c1 = new ExampleComponent('component-1')
  const propNames = c1.propNames()
  console.log(propNames)

  yield c1
}

async function* flatten<T>(
  generator:
    | Generator<T | Generator<T> | AsyncGenerator<T>>
    | AsyncIterable<T | Generator<T> | AsyncGenerator<T>>
    | AsyncGenerator<T | Generator<T> | AsyncGenerator<T>>,
): AsyncGenerator<T> {
  for await (const item of generator) {
    if (is.generator(item)) {
      yield* flatten(item)
    } else if (is.asyncGenerator(item)) {
      yield* flatten(item)
    } else if (is.asyncIterable<T>(item)) {
      for await (const innerItem of item) {
        yield innerItem
      }
    } else {
      yield item
    }
  }
}

const resourceCtx = new ResourceContext()
const urnContext = new URNContext()

async function generate() {
  const urns = new Set<string>()
  const app = flatten(run())
  for await (const resource of app) {
    if (urns.has(resource.$urn)) {
      throw new DuplicateURNError(resource.$urn)
    }
    console.log('got a resource', resource)
    urns.add(resource.$urn)
  }

  const graph = globalRoot().$dependentsGraph
  console.log(graph.dot((n) => n.$urn))
}

Context.runWithAll([resourceCtx, urnContext], generate).catch((error) => {
  prettyPrintError(error)
  process.exit(1)
})
