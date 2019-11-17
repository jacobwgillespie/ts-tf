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
  kind = 'aws_iam_policy'
  _outputAttrNames = ['arn', 'description', 'id', 'name', 'name_prefix', 'path', 'policy'] as const
}
