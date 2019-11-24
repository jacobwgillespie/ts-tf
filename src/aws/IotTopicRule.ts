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
  _kind = 'aws_iot_topic_rule'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get sql() {
    return this._attr('sql')
  }

  get sql_version() {
    return this._attr('sql_version')
  }
}
