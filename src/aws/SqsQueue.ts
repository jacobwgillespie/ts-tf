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
  kind = 'aws_sqs_queue'
  _outputAttrNames = [
    'arn',
    'content_based_deduplication',
    'delay_seconds',
    'fifo_queue',
    'id',
    'kms_data_key_reuse_period_seconds',
    'kms_master_key_id',
    'max_message_size',
    'message_retention_seconds',
    'name',
    'name_prefix',
    'policy',
    'receive_wait_time_seconds',
    'redrive_policy',
    'tags',
    'visibility_timeout_seconds',
  ] as const
}
