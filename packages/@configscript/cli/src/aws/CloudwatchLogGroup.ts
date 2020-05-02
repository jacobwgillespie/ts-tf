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
  _kind = 'aws_cloudwatch_log_group'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get kms_key_id() {
    return this._attr('kms_key_id')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get retention_in_days() {
    return this._attr('retention_in_days')
  }

  get tags() {
    return this._attr('tags')
  }
}
