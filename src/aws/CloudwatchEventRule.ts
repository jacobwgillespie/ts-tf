import {Resource} from '../Resource'

export interface CloudwatchEventRuleArguments {
  description?: string
  event_pattern?: string
  id?: string
  is_enabled?: boolean
  name?: string
  name_prefix?: string
  role_arn?: string
  schedule_expression?: string
  tags?: {[key: string]: string}
}

export interface CloudwatchEventRuleAttributes {
  arn: string
  description?: string
  event_pattern?: string
  id: string
  is_enabled?: boolean
  name: string
  name_prefix?: string
  role_arn?: string
  schedule_expression?: string
  tags?: {[key: string]: string}
}

export class CloudwatchEventRule extends Resource<CloudwatchEventRuleArguments, CloudwatchEventRuleAttributes> {
  kind = 'aws_cloudwatch_event_rule'
  _outputAttrNames = [
    'arn',
    'description',
    'event_pattern',
    'id',
    'is_enabled',
    'name',
    'name_prefix',
    'role_arn',
    'schedule_expression',
    'tags',
  ] as const
}
