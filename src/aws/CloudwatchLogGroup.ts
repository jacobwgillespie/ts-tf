import {Resource} from '../Resource'

export interface CloudwatchLogGroupArguments {
  id?: string
  kms_key_id?: string
  name?: string
  name_prefix?: string
  retention_in_days?: number
  tags?: {[key: string]: string}
}

export interface CloudwatchLogGroupAttributes {
  arn: string
  id: string
  kms_key_id?: string
  name: string
  name_prefix?: string
  retention_in_days?: number
  tags?: {[key: string]: string}
}

export class CloudwatchLogGroup extends Resource<CloudwatchLogGroupArguments, CloudwatchLogGroupAttributes> {
  kind = 'aws_cloudwatch_log_group'
  _outputAttrNames = ['arn', 'id', 'kms_key_id', 'name', 'name_prefix', 'retention_in_days', 'tags'] as const
}
