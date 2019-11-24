import {Resource} from '../Resource'

export interface IamGroupMembershipArguments {
  group: string
  id?: string
  name: string
  users: Set<string>
}

export interface IamGroupMembershipAttributes {
  group: string
  id: string
  name: string
  users: Set<string>
}

export class IamGroupMembership extends Resource<IamGroupMembershipArguments, IamGroupMembershipAttributes> {
  _kind = 'aws_iam_group_membership'

  get group() {
    return this._attr('group')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get users() {
    return this._attr('users')
  }
}
