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
  _kind = 'aws_cloudwatch_event_rule'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get event_pattern() {
    return this._attr('event_pattern')
  }

  get id() {
    return this._attr('id')
  }

  get is_enabled() {
    return this._attr('is_enabled')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get role_arn() {
    return this._attr('role_arn')
  }

  get schedule_expression() {
    return this._attr('schedule_expression')
  }

  get tags() {
    return this._attr('tags')
  }
}
