import {Resource} from '../Resource'

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

export class IamUser extends Resource<IamUserArguments, IamUserAttributes> {
  kind = 'aws_iam_user'
  _outputAttrNames = [
    'arn',
    'force_destroy',
    'id',
    'name',
    'path',
    'permissions_boundary',
    'tags',
    'unique_id',
  ] as const
}
