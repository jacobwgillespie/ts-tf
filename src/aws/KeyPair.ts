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
  kind = 'aws_key_pair'
  _outputAttrNames = ['fingerprint', 'id', 'key_name', 'key_name_prefix', 'public_key'] as const
}
