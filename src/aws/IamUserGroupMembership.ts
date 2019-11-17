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
  kind = 'aws_iam_user_group_membership'
  _outputAttrNames = ['groups', 'id', 'user'] as const
}
