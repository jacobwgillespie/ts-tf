import {Resource} from '../Resource'

export interface IamUserGroupMembershipArguments {
  groups: Set<string>
  id?: string
  user: string
}

export interface IamUserGroupMembershipAttributes {
  groups: Set<string>
  id: string
  user: string
}

export class IamUserGroupMembership extends Resource<
  IamUserGroupMembershipArguments,
  IamUserGroupMembershipAttributes
> {
  _kind = 'aws_iam_user_group_membership'

  get groups() {
    return this._attr('groups')
  }

  get id() {
    return this._attr('id')
  }

  get user() {
    return this._attr('user')
  }
}
