import {Resource} from '../Resource'

export interface IamInstanceProfileArguments {
  id?: string
  name?: string
  name_prefix?: string
  path?: string
  role?: string
  roles?: Set<string>
}

export interface IamInstanceProfileAttributes {
  arn: string
  create_date: string
  id: string
  name: string
  name_prefix?: string
  path?: string
  role: string
  roles: Set<string>
  unique_id: string
}

export class IamInstanceProfile extends Resource<IamInstanceProfileArguments, IamInstanceProfileAttributes> {
  _kind = 'aws_iam_instance_profile'

  get arn() {
    return this._attr('arn')
  }

  get create_date() {
    return this._attr('create_date')
  }

  get id() {
    return this._attr('id')
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

  get role() {
    return this._attr('role')
  }

  get roles() {
    return this._attr('roles')
  }

  get unique_id() {
    return this._attr('unique_id')
  }
}
