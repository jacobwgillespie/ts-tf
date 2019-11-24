import {Resource} from '../Resource'

export interface SqsQueueArguments {
  content_based_deduplication?: boolean
  delay_seconds?: number
  fifo_queue?: boolean
  id?: string
  kms_data_key_reuse_period_seconds?: number
  kms_master_key_id?: string
  max_message_size?: number
  message_retention_seconds?: number
  name?: string
  name_prefix?: string
  policy?: string
  receive_wait_time_seconds?: number
  redrive_policy?: string
  tags?: {[key: string]: string}
  visibility_timeout_seconds?: number
}

export interface SqsQueueAttributes {
  arn: string
  content_based_deduplication?: boolean
  delay_seconds?: number
  fifo_queue?: boolean
  id: string
  kms_data_key_reuse_period_seconds: number
  kms_master_key_id?: string
  max_message_size?: number
  message_retention_seconds?: number
  name: string
  name_prefix?: string
  policy: string
  receive_wait_time_seconds?: number
  redrive_policy?: string
  tags?: {[key: string]: string}
  visibility_timeout_seconds?: number
}

export class SqsQueue extends Resource<SqsQueueArguments, SqsQueueAttributes> {
  _kind = 'aws_sqs_queue'

  get arn() {
    return this._attr('arn')
  }

  get content_based_deduplication() {
    return this._attr('content_based_deduplication')
  }

  get delay_seconds() {
    return this._attr('delay_seconds')
  }

  get fifo_queue() {
    return this._attr('fifo_queue')
  }

  get id() {
    return this._attr('id')
  }

  get kms_data_key_reuse_period_seconds() {
    return this._attr('kms_data_key_reuse_period_seconds')
  }

  get kms_master_key_id() {
    return this._attr('kms_master_key_id')
  }

  get max_message_size() {
    return this._attr('max_message_size')
  }

  get message_retention_seconds() {
    return this._attr('message_retention_seconds')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get policy() {
    return this._attr('policy')
  }

  get receive_wait_time_seconds() {
    return this._attr('receive_wait_time_seconds')
  }

  get redrive_policy() {
    return this._attr('redrive_policy')
  }

  get tags() {
    return this._attr('tags')
  }

  get visibility_timeout_seconds() {
    return this._attr('visibility_timeout_seconds')
  }
}
