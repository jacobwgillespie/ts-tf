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
  kind = 'aws_iam_group_policy'
  _outputAttrNames = ['group', 'id', 'name', 'name_prefix', 'policy'] as const
}
