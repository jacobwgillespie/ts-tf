import {Resource} from '../Resource'

export interface LightsailKeyPairArguments {
  id?: string
  name?: string
  name_prefix?: string
  pgp_key?: string
  public_key?: string
}

export interface LightsailKeyPairAttributes {
  arn: string
  encrypted_fingerprint: string
  encrypted_private_key: string
  fingerprint: string
  id: string
  name: string
  name_prefix?: string
  pgp_key?: string
  private_key: string
  public_key: string
}

export class LightsailKeyPair extends Resource<LightsailKeyPairArguments, LightsailKeyPairAttributes> {
  _kind = 'aws_lightsail_key_pair'

  get arn() {
    return this._attr('arn')
  }

  get encrypted_fingerprint() {
    return this._attr('encrypted_fingerprint')
  }

  get encrypted_private_key() {
    return this._attr('encrypted_private_key')
  }

  get fingerprint() {
    return this._attr('fingerprint')
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

  get pgp_key() {
    return this._attr('pgp_key')
  }

  get private_key() {
    return this._attr('private_key')
  }

  get public_key() {
    return this._attr('public_key')
  }
}
