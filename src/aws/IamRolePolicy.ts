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
  kind = 'aws_iam_role_policy'
  _outputAttrNames = ['id', 'name', 'name_prefix', 'policy', 'role'] as const
}
