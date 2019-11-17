import {Resource} from '../Resource'

export interface SecretsmanagerSecretVersionArguments {
  id?: string
  secret_binary?: string
  secret_id: string
  secret_string?: string
  version_stages?: Set<string>
}

export interface SecretsmanagerSecretVersionAttributes {
  arn: string
  id: string
  secret_binary?: string
  secret_id: string
  secret_string?: string
  version_id: string
  version_stages: Set<string>
}

export class SecretsmanagerSecretVersion extends Resource<
  SecretsmanagerSecretVersionArguments,
  SecretsmanagerSecretVersionAttributes
> {
  kind = 'aws_secretsmanager_secret_version'
  _outputAttrNames = [
    'arn',
    'id',
    'secret_binary',
    'secret_id',
    'secret_string',
    'version_id',
    'version_stages',
  ] as const
}
