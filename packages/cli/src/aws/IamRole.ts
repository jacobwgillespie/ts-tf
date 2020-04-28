import {Resource} from '../Resource'

export interface IamRoleArguments {
  assume_role_policy: string
  description?: string
  force_detach_policies?: boolean
  id?: string
  max_session_duration?: number
  name?: string
  name_prefix?: string
  path?: string
  permissions_boundary?: string
  tags?: {[key: string]: string}
}

export interface IamRoleAttributes {
  arn: string
  assume_role_policy: string
  create_date: string
  description?: string
  force_detach_policies?: boolean
  id: string
  max_session_duration?: number
  name: string
  name_prefix?: string
  path?: string
  permissions_boundary?: string
  tags?: {[key: string]: string}
  unique_id: string
}

export class IamRole extends Resource<IamRoleArguments, IamRoleAttributes> {
  _kind = 'aws_iam_role'

  get arn() {
    return this._attr('arn')
  }

  get assume_role_policy() {
    return this._attr('assume_role_policy')
  }

  get create_date() {
    return this._attr('create_date')
  }

  get description() {
    return this._attr('description')
  }

  get force_detach_policies() {
    return this._attr('force_detach_policies')
  }

  get id() {
    return this._attr('id')
  }

  get max_session_duration() {
    return this._attr('max_session_duration')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
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
