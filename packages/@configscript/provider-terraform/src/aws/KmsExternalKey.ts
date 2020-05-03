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
  _kind = 'aws_kms_external_key'

  get arn() {
    return this._attr('arn')
  }

  get deletion_window_in_days() {
    return this._attr('deletion_window_in_days')
  }

  get description() {
    return this._attr('description')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get expiration_model() {
    return this._attr('expiration_model')
  }

  get id() {
    return this._attr('id')
  }

  get key_material_base64() {
    return this._attr('key_material_base64')
  }

  get key_state() {
    return this._attr('key_state')
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

  get valid_to() {
    return this._attr('valid_to')
  }
}
