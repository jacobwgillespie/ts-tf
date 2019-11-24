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
  _kind = 'aws_kinesis_stream'

  get arn() {
    return this._attr('arn')
  }

  get encryption_type() {
    return this._attr('encryption_type')
  }

  get enforce_consumer_deletion() {
    return this._attr('enforce_consumer_deletion')
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

  get retention_period() {
    return this._attr('retention_period')
  }

  get shard_count() {
    return this._attr('shard_count')
  }

  get shard_level_metrics() {
    return this._attr('shard_level_metrics')
  }

  get tags() {
    return this._attr('tags')
  }
}
