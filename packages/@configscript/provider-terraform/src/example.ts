type ArgumentsOrReferences<Arguments extends object> = {
  [k in keyof Arguments]: Arguments[k] | AttributeReference<Arguments[k]>
}

type ResourceAttributeReferences<Attributes extends object> = {
  readonly [k in keyof Attributes]: AttributeReference<Attributes[k]>
}

type Resource<Type, Arguments extends object, Attributes extends object> = {
  readonly __kind: 'Resource'
  readonly __type: Type
  readonly __name: string
  readonly __args: ArgumentsOrReferences<Arguments>
} & ResourceAttributeReferences<Attributes>

type AttributeReference<T> = {
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

export function resource<Type, Arguments extends object, Attributes extends object>(
  type: Type,
  name: string,
  args: ArgumentsOrReferences<Arguments>,
  attrRefs: ResourceAttributeReferences<Attributes>,
): Resource<Type, Arguments, Attributes> {
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
): Resource<'iam_user', Arguments, IamUserAttributes> {
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
export const user2 = iamUser('my-user', {name: user.name})

console.log(user2)
