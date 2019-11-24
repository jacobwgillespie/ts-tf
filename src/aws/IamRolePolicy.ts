import {Resource} from '../Resource'

export interface IamRolePolicyArguments {
  id?: string
  name?: string
  name_prefix?: string
  policy: string
  role: string
}

export interface IamRolePolicyAttributes {
  id: string
  name: string
  name_prefix?: string
  policy: string
  role: string
}

export class IamRolePolicy extends Resource<IamRolePolicyArguments, IamRolePolicyAttributes> {
  _kind = 'aws_iam_role_policy'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get policy() {
    return this._attr('policy')
  }

  get role() {
    return this._attr('role')
  }
}
