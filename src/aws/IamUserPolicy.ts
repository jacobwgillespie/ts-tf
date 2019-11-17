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
  kind = 'aws_iam_user_policy'
  _outputAttrNames = ['id', 'name', 'name_prefix', 'policy', 'user'] as const
}
