export type Primitive = null | undefined | string | number | boolean | symbol | bigint

type Json = string | number | boolean | null | {readonly [property: string]: Json} | readonly Json[]

function isPlainObject(value: unknown): value is {readonly [property: string]: Json} {
  return typeof value === 'object' && value !== null && value.constructor === Object
}

type StringKeyOf<T> = Extract<keyof T, string>

function keysOf<T extends object>(value: T): readonly StringKeyOf<T>[] {
  return (Object.keys(value) as unknown) as readonly StringKeyOf<T>[]
}

type AttrOrRefInner<T> = T extends object ? T | ArgumentsOrReferences<T> : T

type ArgumentsOrReferences<Arguments extends object> = {
  [k in keyof Arguments]: AttrOrRefInner<Arguments[k]> | AttributeReference<AttrOrRefInner<Arguments[k]>>
}

type ResourceAttributeReferences<Attributes extends object> = {
  readonly [k in keyof Attributes]: AttributeReference<Attributes[k]>
}

type Resource<Arguments extends object = object, Attributes extends object = object> = {
  readonly __kind: 'Resource'
  readonly __type: string
  readonly __name: string
  readonly __args: ArgumentsOrReferences<Arguments>
} & ResourceAttributeReferences<Attributes>

interface AttributeReference<T> {
  readonly __kind: 'AttributeReference'
  readonly __type: T

  readonly __parentName: string
  readonly __parentKind: string
  readonly __name: string
}

export function attributeReference<Attributes, AttributeName extends keyof Attributes>(
  parentName: string,
  parentKind: string,
  name: string,
): AttributeReference<Attributes[AttributeName]> {
  return {
    __kind: 'AttributeReference',
    __type: {} as Attributes[AttributeName],
    __parentName: parentName,
    __parentKind: parentKind,
    __name: name,
  }
}

export interface IamUserArguments {
  /** Delete user even if it has non-Terraform-managed IAM access keys, login profile or MFA devices */
  readonly force_destroy?: boolean
  readonly id?: string
  readonly name: string
  readonly path?: string
  readonly permissions_boundary?: string
  readonly tags?: {readonly [key: string]: string}
}

export interface IamUserAttributes {
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

export function resource<Arguments extends object, Attributes extends object>(
  type: string,
  name: string,
  args: ArgumentsOrReferences<Arguments>,
  attrRefs: ResourceAttributeReferences<Attributes>,
): Resource<Arguments, Attributes> {
  return {
    __kind: 'Resource',
    __type: type,
    __name: name,
    __args: args,
    ...attrRefs,
  }
}

export function iamUser<Arguments extends IamUserArguments>(
  name: string,
  args: ArgumentsOrReferences<Arguments>,
): Resource<Arguments, IamUserAttributes> {
  const attrRefs: ResourceAttributeReferences<IamUserAttributes> = {
    arn: attributeReference('iam_user', name, 'arn'),
    force_destroy: attributeReference('iam_user', name, 'force_destroy'),
    id: attributeReference('iam_user', name, 'id'),
    name: attributeReference('iam_user', name, 'name'),
    path: attributeReference('iam_user', name, 'path'),
    permissions_boundary: attributeReference('iam_user', name, 'permissions_boundary'),
    tags: attributeReference('iam_user', name, 'tags'),
    unique_id: attributeReference('iam_user', name, 'unique_id'),
  }
  return resource('iam_user', name, args, attrRefs)
}

export const user = iamUser('my-user', {name: 'my-user'})
export const user2 = iamUser('my-user', {name: user.name, tags: {asdf: 'true', 'other-user': user.arn}})

function isAttributeReference(value: unknown): value is AttributeReference<unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    (value as AttributeReference<unknown>).__kind === 'AttributeReference'
  )
}

function renderArgOrReference<T>(value: T | AttributeReference<T>): T | string {
  if (isAttributeReference(value)) {
    return `\${${value.__parentKind}.${value.__parentName}}`
  } else if (isPlainObject(value)) {
    return keysOf(value).reduce(
      (renderedObject, key) => ({...renderedObject, [key]: renderArgOrReference(value[key])}),
      value,
    )
  }
  return value
}

function render(resource: Resource): object {
  const args: ArgumentsOrReferences<Record<string, unknown>> = keysOf(resource.__args).reduce<
    ArgumentsOrReferences<Record<string, unknown>>
  >((renderedArgs, key) => {
    return {...renderedArgs, [key]: renderArgOrReference(resource.__args[key])}
  }, {})

  return {[resource.__type]: {[resource.__name]: args}}
}

console.log(user2)
console.log(JSON.stringify(render(user2), undefined, 2))
