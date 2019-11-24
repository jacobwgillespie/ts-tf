import {Resource} from '../Resource'

export interface IamPolicyArguments {
  description?: string
  id?: string
  name?: string
  name_prefix?: string
  path?: string
  policy: string
}

export interface IamPolicyAttributes {
  arn: string
  description?: string
  id: string
  name: string
  name_prefix?: string
  path?: string
  policy: string
}

export class IamPolicy extends Resource<IamPolicyArguments, IamPolicyAttributes> {
  _kind = 'aws_iam_policy'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
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

  get policy() {
    return this._attr('policy')
  }
}
