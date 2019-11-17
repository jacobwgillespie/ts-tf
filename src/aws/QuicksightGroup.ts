import {Resource} from '../Resource'

export interface QuicksightGroupArguments {
  aws_account_id?: string
  description?: string
  group_name: string
  id?: string
  namespace?: string
}

export interface QuicksightGroupAttributes {
  arn: string
  aws_account_id: string
  description?: string
  group_name: string
  id: string
  namespace?: string
}

export class QuicksightGroup extends Resource<QuicksightGroupArguments, QuicksightGroupAttributes> {
  kind = 'aws_quicksight_group'
  _outputAttrNames = ['arn', 'aws_account_id', 'description', 'group_name', 'id', 'namespace'] as const
}
