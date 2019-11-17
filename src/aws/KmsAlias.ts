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
  kind = 'aws_kms_alias'
  _outputAttrNames = ['arn', 'id', 'name', 'name_prefix', 'target_key_arn', 'target_key_id'] as const
}
