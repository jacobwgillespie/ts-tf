import {isPlainObject, keysOf, StringKeyOf} from '@infrascript/types'

export type AttrOrRefInner<T> = T extends object ? T | ArgumentsOrReferences<T> : T

export type ArgumentsOrReferences<Arguments extends object> = {
  [k in keyof Arguments]: AttrOrRefInner<Arguments[k]> | AttributeReference<AttrOrRefInner<Arguments[k]>>
}

export class AttributeReference<T> {
  #type: T = {} as T
  #parent: Resource

  constructor(parent: Resource, public name: string) {
    this.#parent = parent

    // This does nothing, but it's required to make TypeScript happy
    this.#type
  }

  render(): string {
    return `\${${this.#parent.__kind}.${this.#parent.__name}.${this.name}}`
  }
}

function unwrapArray<T>(value: Array<T | AttributeReference<T>>): unknown[] {
  return value.map((item) => unwrap(item))
}

function unwrapObject<T>(value: Record<string, T>): Record<string, unknown> {
  return keysOf(value).reduce((renderedObject, key) => ({...renderedObject, [key]: unwrap(value[key])}), {})
}

function unwrap<T>(value: T): unknown {
  if (value instanceof AttributeReference) {
    return value.render()
  } else if (Array.isArray(value)) {
    return unwrapArray(value)
  } else if (value instanceof Set) {
    return unwrapArray([...value])
  } else if (isPlainObject(value)) {
    return unwrapObject(value)
  }
  return value
}

export abstract class Resource<Arguments extends object = {}, Attributes extends object = {}> {
  abstract get __kind(): string
  abstract get __provider(): string

  constructor(public __name: string, public __args: ArgumentsOrReferences<Arguments>) {}

  render(): object {
    const args: ArgumentsOrReferences<Record<string, unknown>> = keysOf(this.__args).reduce<
      ArgumentsOrReferences<Record<string, unknown>>
    >((renderedArgs, key) => {
      const value = this.__args[key]
      return {...renderedArgs, [key]: unwrap(value)}
    }, {})

    return {[this.__kind]: {[this.__name]: args}}
  }

  protected __attr<K extends StringKeyOf<Attributes>>(key: K): AttributeReference<Attributes[K]> {
    return new AttributeReference<Attributes[K]>(this, key)
  }
}

export abstract class TerraformResource<Arguments extends object = {}, Attributes extends object = {}> extends Resource<
  Arguments,
  Attributes
> {
  get __provider(): 'terraform' {
    return 'terraform'
  }
}

export interface IamUserArguments {
  /** Delete user even if it has non-Terraform-managed IAM access keys, login profile or MFA devices */
  force_destroy?: boolean
  id?: string
  name: string
  path?: string
  permissions_boundary?: string
  tags?: {[key: string]: string}
}

export interface IamUserAttributes {
  arn: string
  /** Delete user even if it has non-Terraform-managed IAM access keys, login profile or MFA devices */
  force_destroy?: boolean
  id: string
  name: string
  path?: string
  permissions_boundary?: string
  tags?: {[key: string]: string}
  unique_id: string
}

export class IamUser extends TerraformResource<IamUserArguments, IamUserAttributes> {
  get __kind(): 'iam_user' {
    return 'iam_user'
  }

  constructor(name: string, args: ArgumentsOrReferences<IamUserArguments>) {
    super(name, args)
    Object.freeze(this)
  }

  arn = this.__attr('arn')
  force_destroy = this.__attr('force_destroy')
  id = this.__attr('id')
  name = this.__attr('name')
  path = this.__attr('path')
  permissions_boundary = this.__attr('permissions_boundary')
  tags = this.__attr('tags')
  unique_id = this.__attr('unique_id')
}

// export const user = new IamUser('my-user', {name: 'my-user'})
// export const user2 = new IamUser('my-user', {
//   name: user.name,
//   tags: {asdf: 'true', 'other-user': user.arn},
// })

// console.log(user2)
// console.log(user2.name)
// console.log(JSON.stringify(user2.render(), undefined, 2))
