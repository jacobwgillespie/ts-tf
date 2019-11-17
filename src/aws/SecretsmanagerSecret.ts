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
  kind = 'aws_secretsmanager_secret'
  _outputAttrNames = [
    'arn',
    'description',
    'id',
    'kms_key_id',
    'name',
    'name_prefix',
    'policy',
    'recovery_window_in_days',
    'rotation_enabled',
    'rotation_lambda_arn',
    'tags',
  ] as const
}
