import {Resource} from '../Resource'

export interface IamGroupArguments {
  id?: string
  name: string
  path?: string
}

export interface IamGroupAttributes {
  arn: string
  id: string
  name: string
  path?: string
  unique_id: string
}

export class IamGroup extends Resource<IamGroupArguments, IamGroupAttributes> {
  kind = 'aws_iam_group'
  _outputAttrNames = ['arn', 'id', 'name', 'path', 'unique_id'] as const
}
