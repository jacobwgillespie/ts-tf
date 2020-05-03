import {Resource} from '../Resource'

export interface CloudwatchEventTargetArguments {
  arn: string
  id?: string
  input?: string
  input_path?: string
  role_arn?: string
  rule: string
  target_id?: string
}

export interface CloudwatchEventTargetAttributes {
  arn: string
  id: string
  input?: string
  input_path?: string
  role_arn?: string
  rule: string
  target_id: string
}

export class CloudwatchEventTarget extends Resource<CloudwatchEventTargetArguments, CloudwatchEventTargetAttributes> {
  _kind = 'aws_cloudwatch_event_target'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get input() {
    return this._attr('input')
  }

  get input_path() {
    return this._attr('input_path')
  }

  get role_arn() {
    return this._attr('role_arn')
  }

  get rule() {
    return this._attr('rule')
  }

  get target_id() {
    return this._attr('target_id')
  }
}
