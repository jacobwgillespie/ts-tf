import {Resource} from '../Resource'

export interface KeyPairArguments {
  id?: string
  key_name?: string
  key_name_prefix?: string
  public_key: string
}

export interface KeyPairAttributes {
  fingerprint: string
  id: string
  key_name: string
  key_name_prefix?: string
  public_key: string
}

export class KeyPair extends Resource<KeyPairArguments, KeyPairAttributes> {
  _kind = 'aws_key_pair'

  get fingerprint() {
    return this._attr('fingerprint')
  }

  get id() {
    return this._attr('id')
  }

  get key_name() {
    return this._attr('key_name')
  }

  get key_name_prefix() {
    return this._attr('key_name_prefix')
  }

  get public_key() {
    return this._attr('public_key')
  }
}
