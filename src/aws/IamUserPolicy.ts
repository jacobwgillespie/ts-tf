import {Resource} from '../Resource'

export interface IamUserPolicyArguments {
  id?: string
  name?: string
  name_prefix?: string
  policy: string
  user: string
}

export interface IamUserPolicyAttributes {
  id: string
  name: string
  name_prefix?: string
  policy: string
  user: string
}

export class IamUserPolicy extends Resource<IamUserPolicyArguments, IamUserPolicyAttributes> {
  _kind = 'aws_iam_user_policy'

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

  get user() {
    return this._attr('user')
  }
}
