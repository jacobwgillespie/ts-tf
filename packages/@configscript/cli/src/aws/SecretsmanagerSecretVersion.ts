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
  _kind = 'aws_secretsmanager_secret_version'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get secret_binary() {
    return this._attr('secret_binary')
  }

  get secret_id() {
    return this._attr('secret_id')
  }

  get secret_string() {
    return this._attr('secret_string')
  }

  get version_id() {
    return this._attr('version_id')
  }

  get version_stages() {
    return this._attr('version_stages')
  }
}
