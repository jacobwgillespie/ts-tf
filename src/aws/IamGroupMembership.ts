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
  kind = 'aws_iam_group_membership'
  _outputAttrNames = ['group', 'id', 'name', 'users'] as const
}
