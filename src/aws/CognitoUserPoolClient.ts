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
  kind = 'aws_cognito_user_pool_client'
  _outputAttrNames = [
    'allowed_oauth_flows',
    'allowed_oauth_flows_user_pool_client',
    'allowed_oauth_scopes',
    'callback_urls',
    'client_secret',
    'default_redirect_uri',
    'explicit_auth_flows',
    'generate_secret',
    'id',
    'logout_urls',
    'name',
    'read_attributes',
    'refresh_token_validity',
    'supported_identity_providers',
    'user_pool_id',
    'write_attributes',
  ] as const
}
