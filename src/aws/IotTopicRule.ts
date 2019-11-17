import {Resource} from '../Resource'

export interface IotTopicRuleArguments {
  description?: string
  enabled: boolean
  id?: string
  name: string
  sql: string
  sql_version: string
}

export interface IotTopicRuleAttributes {
  arn: string
  description?: string
  enabled: boolean
  id: string
  name: string
  sql: string
  sql_version: string
}

export class IotTopicRule extends Resource<IotTopicRuleArguments, IotTopicRuleAttributes> {
  kind = 'aws_iot_topic_rule'
  _outputAttrNames = ['arn', 'description', 'enabled', 'id', 'name', 'sql', 'sql_version'] as const
}
