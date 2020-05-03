type ResourceAttributeReferences<Attributes extends object> = {
  readonly [k in keyof Attributes]: AttributeReference<Attributes, k>
}

type Resource<Type, Arguments extends object, Attributes extends object> = {
  readonly __kind: 'Resource'
  readonly __type: Type
  readonly __name: string
  readonly __args: Arguments
} & ResourceAttributeReferences<Attributes>

type AttributeReference<Attributes, AttributeName extends keyof Attributes> = {
  readonly __kind: 'AttributeReference'
  readonly __type: Attributes[AttributeName]

  readonly __parentName: string
  readonly __parentKind: string
  readonly __name: AttributeName
}

export function attributeReference<Attributes, AttributeName extends keyof Attributes>(
  parentName: string,
  parentKind: string,
  name: AttributeName,
): AttributeReference<Attributes, AttributeName> {
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
  args: Arguments,
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

export function iamUser<Args extends IamUserArguments>(
  name: string,
  args: Args,
): Resource<'iam_user', Args, IamUserAttributes> {
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

export const user = iamUser('my-user', {name: 'my-user'} as const)
export const name = user.name

console.log(user)
console.log(name)
