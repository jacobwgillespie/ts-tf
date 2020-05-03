import {Resource} from '../Resource'

export interface SecretsmanagerSecretArguments {
  description?: string
  id?: string
  kms_key_id?: string
  name?: string
  name_prefix?: string
  policy?: string
  recovery_window_in_days?: number
  rotation_lambda_arn?: string
  tags?: {[key: string]: string}
}

export interface SecretsmanagerSecretAttributes {
  arn: string
  description?: string
  id: string
  kms_key_id?: string
  name: string
  name_prefix: string
  policy?: string
  recovery_window_in_days?: number
  rotation_enabled: boolean
  rotation_lambda_arn?: string
  tags?: {[key: string]: string}
}

export class SecretsmanagerSecret extends Resource<SecretsmanagerSecretArguments, SecretsmanagerSecretAttributes> {
  _kind = 'aws_secretsmanager_secret'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
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

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get policy() {
    return this._attr('policy')
  }

  get recovery_window_in_days() {
    return this._attr('recovery_window_in_days')
  }

  get rotation_enabled() {
    return this._attr('rotation_enabled')
  }

  get rotation_lambda_arn() {
    return this._attr('rotation_lambda_arn')
  }

  get tags() {
    return this._attr('tags')
  }
}
