import {Resource} from '../Resource'

export interface KmsAliasArguments {
  id?: string
  name?: string
  name_prefix?: string
  target_key_id: string
}

export interface KmsAliasAttributes {
  arn: string
  id: string
  name?: string
  name_prefix?: string
  target_key_arn: string
  target_key_id: string
}

export class KmsAlias extends Resource<KmsAliasArguments, KmsAliasAttributes> {
  _kind = 'aws_kms_alias'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get target_key_arn() {
    return this._attr('target_key_arn')
  }

  get target_key_id() {
    return this._attr('target_key_id')
  }
}
