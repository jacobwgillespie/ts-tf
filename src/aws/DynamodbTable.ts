import {Resource} from '../Resource'

export interface DynamodbTableArguments {
  billing_mode?: string
  hash_key: string
  id?: string
  name: string
  range_key?: string
  read_capacity?: number
  stream_enabled?: boolean
  stream_view_type?: string
  tags?: {[key: string]: string}
  write_capacity?: number
}

export interface DynamodbTableAttributes {
  arn: string
  billing_mode?: string
  hash_key: string
  id: string
  name: string
  range_key?: string
  read_capacity?: number
  stream_arn: string
  stream_enabled?: boolean
  stream_label: string
  stream_view_type: string
  tags?: {[key: string]: string}
  write_capacity?: number
}

export class DynamodbTable extends Resource<DynamodbTableArguments, DynamodbTableAttributes> {
  kind = 'aws_dynamodb_table'
  _outputAttrNames = [
    'arn',
    'billing_mode',
    'hash_key',
    'id',
    'name',
    'range_key',
    'read_capacity',
    'stream_arn',
    'stream_enabled',
    'stream_label',
    'stream_view_type',
    'tags',
    'write_capacity',
  ] as const
}
