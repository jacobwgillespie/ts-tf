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
  kind = 'aws_lightsail_key_pair'
  _outputAttrNames = [
    'arn',
    'encrypted_fingerprint',
    'encrypted_private_key',
    'fingerprint',
    'id',
    'name',
    'name_prefix',
    'pgp_key',
    'private_key',
    'public_key',
  ] as const
}
