import {Resource} from '../Resource'

export interface KmsGrantArguments {
  grant_creation_tokens?: Set<string>
  grantee_principal: string
  id?: string
  key_id: string
  name?: string
  operations: Set<string>
  retire_on_delete?: boolean
  retiring_principal?: string
}

export interface KmsGrantAttributes {
  grant_creation_tokens?: Set<string>
  grant_id: string
  grant_token: string
  grantee_principal: string
  id: string
  key_id: string
  name?: string
  operations: Set<string>
  retire_on_delete?: boolean
  retiring_principal?: string
}

export class KmsGrant extends Resource<KmsGrantArguments, KmsGrantAttributes> {
  kind = 'aws_kms_grant'
  _outputAttrNames = [
    'grant_creation_tokens',
    'grant_id',
    'grant_token',
    'grantee_principal',
    'id',
    'key_id',
    'name',
    'operations',
    'retire_on_delete',
    'retiring_principal',
  ] as const
}
