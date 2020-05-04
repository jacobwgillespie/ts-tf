import {Resource} from '../Resource'

export interface KinesisAnalyticsApplicationArguments {
  code?: string
  description?: string
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface KinesisAnalyticsApplicationAttributes {
  arn: string
  code?: string
  create_timestamp: string
  description?: string
  id: string
  last_update_timestamp: string
  name: string
  status: string
  tags?: {[key: string]: string}
  version: number
}

export class KinesisAnalyticsApplication extends Resource<
  KinesisAnalyticsApplicationArguments,
  KinesisAnalyticsApplicationAttributes
> {
  _kind = 'aws_kinesis_analytics_application'

  get arn() {
    return this._attr('arn')
  }

  get code() {
    return this._attr('code')
  }

  get create_timestamp() {
    return this._attr('create_timestamp')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get last_update_timestamp() {
    return this._attr('last_update_timestamp')
  }

  get name() {
    return this._attr('name')
  }

  get status() {
    return this._attr('status')
  }

  get tags() {
    return this._attr('tags')
  }

  get version() {
    return this._attr('version')
  }
}
