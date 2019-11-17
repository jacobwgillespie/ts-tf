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
  kind = 'aws_kinesis_analytics_application'
  _outputAttrNames = [
    'arn',
    'code',
    'create_timestamp',
    'description',
    'id',
    'last_update_timestamp',
    'name',
    'status',
    'tags',
    'version',
  ] as const
}
