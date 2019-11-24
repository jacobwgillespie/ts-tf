import {Resource} from '../Resource'

export interface CognitoUserPoolClientArguments {
  allowed_oauth_flows?: Set<string>
  allowed_oauth_flows_user_pool_client?: boolean
  allowed_oauth_scopes?: Set<string>
  callback_urls?: Array<string>
  default_redirect_uri?: string
  explicit_auth_flows?: Set<string>
  generate_secret?: boolean
  id?: string
  logout_urls?: Array<string>
  name: string
  read_attributes?: Set<string>
  refresh_token_validity?: number
  supported_identity_providers?: Array<string>
  user_pool_id: string
  write_attributes?: Set<string>
}

export interface CognitoUserPoolClientAttributes {
  allowed_oauth_flows?: Set<string>
  allowed_oauth_flows_user_pool_client?: boolean
  allowed_oauth_scopes?: Set<string>
  callback_urls?: Array<string>
  client_secret: string
  default_redirect_uri?: string
  explicit_auth_flows?: Set<string>
  generate_secret?: boolean
  id: string
  logout_urls?: Array<string>
  name: string
  read_attributes?: Set<string>
  refresh_token_validity?: number
  supported_identity_providers?: Array<string>
  user_pool_id: string
  write_attributes?: Set<string>
}

export class CognitoUserPoolClient extends Resource<CognitoUserPoolClientArguments, CognitoUserPoolClientAttributes> {
  _kind = 'aws_cognito_user_pool_client'

  get allowed_oauth_flows() {
    return this._attr('allowed_oauth_flows')
  }

  get allowed_oauth_flows_user_pool_client() {
    return this._attr('allowed_oauth_flows_user_pool_client')
  }

  get allowed_oauth_scopes() {
    return this._attr('allowed_oauth_scopes')
  }

  get callback_urls() {
    return this._attr('callback_urls')
  }

  get client_secret() {
    return this._attr('client_secret')
  }

  get default_redirect_uri() {
    return this._attr('default_redirect_uri')
  }

  get explicit_auth_flows() {
    return this._attr('explicit_auth_flows')
  }

  get generate_secret() {
    return this._attr('generate_secret')
  }

  get id() {
    return this._attr('id')
  }

  get logout_urls() {
    return this._attr('logout_urls')
  }

  get name() {
    return this._attr('name')
  }

  get read_attributes() {
    return this._attr('read_attributes')
  }

  get refresh_token_validity() {
    return this._attr('refresh_token_validity')
  }

  get supported_identity_providers() {
    return this._attr('supported_identity_providers')
  }

  get user_pool_id() {
    return this._attr('user_pool_id')
  }

  get write_attributes() {
    return this._attr('write_attributes')
  }
}
