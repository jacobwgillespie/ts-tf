import {Resource} from '../Resource'

export interface KmsExternalKeyArguments {
  deletion_window_in_days?: number
  description?: string
  enabled?: boolean
  id?: string
  key_material_base64?: string
  policy?: string
  tags?: {[key: string]: string}
  valid_to?: string
}

export interface KmsExternalKeyAttributes {
  arn: string
  deletion_window_in_days?: number
  description?: string
  enabled: boolean
  expiration_model: string
  id: string
  key_material_base64?: string
  key_state: string
  key_usage: string
  policy: string
  tags?: {[key: string]: string}
  valid_to?: string
}

export class KmsExternalKey extends Resource<KmsExternalKeyArguments, KmsExternalKeyAttributes> {
  kind = 'aws_kms_external_key'
  _outputAttrNames = [
    'arn',
    'deletion_window_in_days',
    'description',
    'enabled',
    'expiration_model',
    'id',
    'key_material_base64',
    'key_state',
    'key_usage',
    'policy',
    'tags',
    'valid_to',
  ] as const
}
