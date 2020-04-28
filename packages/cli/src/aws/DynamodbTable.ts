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
  _kind = 'aws_dynamodb_table'

  get arn() {
    return this._attr('arn')
  }

  get billing_mode() {
    return this._attr('billing_mode')
  }

  get hash_key() {
    return this._attr('hash_key')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get range_key() {
    return this._attr('range_key')
  }

  get read_capacity() {
    return this._attr('read_capacity')
  }

  get stream_arn() {
    return this._attr('stream_arn')
  }

  get stream_enabled() {
    return this._attr('stream_enabled')
  }

  get stream_label() {
    return this._attr('stream_label')
  }

  get stream_view_type() {
    return this._attr('stream_view_type')
  }

  get tags() {
    return this._attr('tags')
  }

  get write_capacity() {
    return this._attr('write_capacity')
  }
}
