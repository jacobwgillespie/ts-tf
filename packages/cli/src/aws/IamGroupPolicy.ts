import {Resource} from '../Resource'

export interface IamGroupPolicyArguments {
  group: string
  id?: string
  name?: string
  name_prefix?: string
  policy: string
}

export interface IamGroupPolicyAttributes {
  group: string
  id: string
  name: string
  name_prefix?: string
  policy: string
}

export class IamGroupPolicy extends Resource<IamGroupPolicyArguments, IamGroupPolicyAttributes> {
  _kind = 'aws_iam_group_policy'

  get group() {
    return this._attr('group')
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

  get policy() {
    return this._attr('policy')
  }
}
