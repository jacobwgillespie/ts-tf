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
  _kind = 'aws_kms_grant'

  get grant_creation_tokens() {
    return this._attr('grant_creation_tokens')
  }

  get grant_id() {
    return this._attr('grant_id')
  }

  get grant_token() {
    return this._attr('grant_token')
  }

  get grantee_principal() {
    return this._attr('grantee_principal')
  }

  get id() {
    return this._attr('id')
  }

  get key_id() {
    return this._attr('key_id')
  }

  get name() {
    return this._attr('name')
  }

  get operations() {
    return this._attr('operations')
  }

  get retire_on_delete() {
    return this._attr('retire_on_delete')
  }

  get retiring_principal() {
    return this._attr('retiring_principal')
  }
}
