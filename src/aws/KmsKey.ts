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
  kind = 'aws_kms_key'
  _outputAttrNames = [
    'arn',
    'deletion_window_in_days',
    'description',
    'enable_key_rotation',
    'id',
    'is_enabled',
    'key_id',
    'key_usage',
    'policy',
    'tags',
  ] as const
}
