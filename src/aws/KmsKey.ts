import {Resource} from '../Resource'

export interface KmsKeyArguments {
  deletion_window_in_days?: number
  description?: string
  enable_key_rotation?: boolean
  id?: string
  is_enabled?: boolean
  key_usage?: string
  policy?: string
  tags?: {[key: string]: string}
}

export interface KmsKeyAttributes {
  arn: string
  deletion_window_in_days?: number
  description: string
  enable_key_rotation?: boolean
  id: string
  is_enabled?: boolean
  key_id: string
  key_usage: string
  policy: string
  tags?: {[key: string]: string}
}

export class KmsKey extends Resource<KmsKeyArguments, KmsKeyAttributes> {
  _kind = 'aws_kms_key'

  get arn() {
    return this._attr('arn')
  }

  get deletion_window_in_days() {
    return this._attr('deletion_window_in_days')
  }

  get description() {
    return this._attr('description')
  }

  get enable_key_rotation() {
    return this._attr('enable_key_rotation')
  }

  get id() {
    return this._attr('id')
  }

  get is_enabled() {
    return this._attr('is_enabled')
  }

  get key_id() {
    return this._attr('key_id')
  }

  get key_usage() {
    return this._attr('key_usage')
  }

  get policy() {
    return this._attr('policy')
  }

  get tags() {
    return this._attr('tags')
  }
}
