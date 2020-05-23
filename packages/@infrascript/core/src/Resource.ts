import is from '@sindresorhus/is'
import {inspect} from 'util'
import {Context} from './context'
import {Entity} from './Entity'
import {Namespace} from './Namespace'
import {Prop, ReferenceProp, WrappedValueOf} from './Prop'
import {keysOf, StringKeyOf} from './utils'

declare global {
  interface ContextData {
    ctx: {
      namespace: Namespace
    }
  }
}

function unwrapPropsFn<Props>(props: Props | (() => Props)): Props {
  if (is.function_(props)) {
    return props()
  }
  return props
}

export abstract class Resource<Props extends object = object> extends Entity {
  abstract get kind(): string

  #ctx = Context.for('ctx')
  #namespace = this.#ctx.get('namespace')
  #props: Props

  constructor(name: string, props: Props | (() => Props)) {
    super(name)
    this.#props = unwrapPropsFn(props)
    this.#namespace._registerResource(this)

    // Register any reference props with namespace
    for (const k of keysOf(this.#props)) {
      const prop = this.#props[k]
      if (prop instanceof ReferenceProp) {
        this.#namespace._registerReferenceProp(prop, this)
      }
    }
  }

  protected [inspect.custom](): string {
    return `Resource ${inspect({$urn: this.urn, ...this.#props})}`
  }

  // eslint-disable-next-line @typescript-eslint/promise-function-async
  protected attr<T extends StringKeyOf<Props>>(key: T): ReferenceProp<WrappedValueOf<Props[T]>> {
    const prop = this.#props[key]
    return ReferenceProp.wrap(prop, this)
  }

  get urn(): string {
    return `urn:infra:${this.#namespace.name}:resource::${this.kind}/${this.name}`
  }
}

interface ExampleResource1Props {
  prop1: Prop<number>
  prop2: Prop<string>
}

export class ExampleResource1 extends Resource<ExampleResource1Props> {
  get kind(): 'ExampleResource1' {
    return 'ExampleResource1'
  }

  get prop1(): ReferenceProp<number> {
    return this.attr('prop1')
  }

  get prop2(): ReferenceProp<string> {
    return this.attr('prop2')
  }
}

interface ExampleResource2Props {
  prop1: Prop<number>
  prop2: Prop<string>
}

export class ExampleResource2 extends Resource<ExampleResource2Props> {
  get kind(): 'ExampleResource2' {
    return 'ExampleResource2'
  }

  get prop1(): ReferenceProp<number> {
    return this.attr('prop1')
  }

  get prop2(): ReferenceProp<string> {
    return this.attr('prop2')
  }
}
