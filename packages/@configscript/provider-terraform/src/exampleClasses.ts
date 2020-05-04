type StringKeyOf<T> = Extract<keyof T, string>

function keysOf<T extends object>(value: T): readonly StringKeyOf<T>[] {
  return (Object.keys(value) as unknown) as readonly StringKeyOf<T>[]
}

type AttrOrRefInner<T> = T extends object ? T | ArgumentsOrReferences<T> : T

type ArgumentsOrReferences<Arguments extends object> = {
  [k in keyof Arguments]: AttrOrRefInner<Arguments[k]> | AttributeReference<AttrOrRefInner<Arguments[k]>>
}

class AttributeReference<T> {
  readonly __type = {} as T

  constructor(public readonly parent: Resource, public readonly name: string) {}

  render(): string {
    return `\${${this.parent.__type}.${this.parent.__name}.${this.name}}`
  }
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && value.constructor === Object
}

function unwrapArray<T>(value: ReadonlyArray<T | AttributeReference<T>>): readonly unknown[] {
  return value.map((item) => (item instanceof AttributeReference ? item.render() : item))
}

function unwrapObject<T>(value: Record<string, T>): Record<string, unknown> {
  return keysOf(value).reduce((renderedObject, key) => ({...renderedObject, [key]: unwrap(value[key])}), {})
}

function unwrap<T>(value: T): unknown {
  if (value instanceof AttributeReference) {
    return value.render()
  } else if (Array.isArray(value)) {
    return unwrapArray(value)
  } else if (isPlainObject(value)) {
    return unwrapObject(value)
  }
  return value
}

abstract class Resource<Arguments extends object = {}, Attributes extends object = {}> {
  get __kind(): 'Resource' {
    return 'Resource'
  }

  public abstract readonly __type: string = '__type'

  constructor(public readonly __name: string, public readonly __args: ArgumentsOrReferences<Arguments>) {
    Object.seal(this)
  }

  render(): object {
    const args: ArgumentsOrReferences<Record<string, unknown>> = keysOf(this.__args).reduce<
      ArgumentsOrReferences<Record<string, unknown>>
    >((renderedArgs, key) => {
      const value = this.__args[key]
      return {...renderedArgs, [key]: unwrap(value)}
    }, {})

    console.log(args)

    return {[this.__type]: {[this.__name]: args}}
  }

  protected __attr<K extends StringKeyOf<Attributes>>(key: K): AttributeReference<Attributes[K]> {
    return new AttributeReference<Attributes[K]>(this, key)
  }
}

export type IamUserArguments = {
  /** Delete user even if it has non-Terraform-managed IAM access keys, login profile or MFA devices */
  readonly force_destroy?: boolean
  readonly id?: string
  readonly name: string
  readonly path?: string
  readonly permissions_boundary?: string
  readonly tags?: {readonly [key: string]: string}
}

export type IamUserAttributes = {
  readonly arn: string
  /** Delete user even if it has non-Terraform-managed IAM access keys, login profile or MFA devices */
  readonly force_destroy?: boolean
  readonly id: string
  readonly name: string
  readonly path?: string
  readonly permissions_boundary?: string
  readonly tags?: {readonly [key: string]: string}
  readonly unique_id: string
}

class IamUser extends Resource<IamUserArguments, IamUserAttributes> {
  readonly __type = 'iam_user'

  constructor(name: string, args: ArgumentsOrReferences<IamUserArguments>) {
    super(name, args)
    Object.freeze(this)
  }

  get arn() {
    return this.__attr('arn')
  }
  get force_destroy() {
    return this.__attr('force_destroy')
  }
  get id() {
    return this.__attr('id')
  }
  get name() {
    return this.__attr('name')
  }
  get path() {
    return this.__attr('path')
  }
  get permissions_boundary() {
    return this.__attr('permissions_boundary')
  }
  get tags() {
    return this.__attr('tags')
  }
  get unique_id() {
    return this.__attr('unique_id')
  }
}

export const user = new IamUser('my-user', {name: 'my-user'})
export const user2 = new IamUser('my-user', {
  name: user.name,
  tags: {asdf: 'true', 'other-user': user.arn},
})

console.log(user2)
console.log(user2.name)
console.log(JSON.stringify(user2.render(), undefined, 2))
