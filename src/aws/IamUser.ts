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
  _kind = 'aws_iam_user'

  get arn() {
    return this._attr('arn')
  }

  get force_destroy() {
    return this._attr('force_destroy')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get path() {
    return this._attr('path')
  }

  get permissions_boundary() {
    return this._attr('permissions_boundary')
  }

  get tags() {
    return this._attr('tags')
  }

  get unique_id() {
    return this._attr('unique_id')
  }
}
