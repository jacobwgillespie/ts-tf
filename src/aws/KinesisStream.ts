import {Resource} from '../Resource'

export interface KinesisStreamArguments {
  arn?: string
  encryption_type?: string
  enforce_consumer_deletion?: boolean
  id?: string
  kms_key_id?: string
  name: string
  retention_period?: number
  shard_count: number
  shard_level_metrics?: Set<string>
  tags?: {[key: string]: string}
}

export interface KinesisStreamAttributes {
  arn: string
  encryption_type?: string
  enforce_consumer_deletion?: boolean
  id: string
  kms_key_id?: string
  name: string
  retention_period?: number
  shard_count: number
  shard_level_metrics?: Set<string>
  tags?: {[key: string]: string}
}

export class KinesisStream extends Resource<KinesisStreamArguments, KinesisStreamAttributes> {
  kind = 'aws_kinesis_stream'
  _outputAttrNames = [
    'arn',
    'encryption_type',
    'enforce_consumer_deletion',
    'id',
    'kms_key_id',
    'name',
    'retention_period',
    'shard_count',
    'shard_level_metrics',
    'tags',
  ] as const
}
