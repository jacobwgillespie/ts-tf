import {Resource} from '../Resource'

export interface CognitoIdentityPoolArguments {
  allow_unauthenticated_identities?: boolean
  developer_provider_name?: string
  id?: string
  identity_pool_name: string
  openid_connect_provider_arns?: Array<string>
  saml_provider_arns?: Array<string>
  supported_login_providers?: {[key: string]: string}
  tags?: {[key: string]: string}
}

export interface CognitoIdentityPoolAttributes {
  allow_unauthenticated_identities?: boolean
  arn: string
  developer_provider_name?: string
  id: string
  identity_pool_name: string
  openid_connect_provider_arns?: Array<string>
  saml_provider_arns?: Array<string>
  supported_login_providers?: {[key: string]: string}
  tags?: {[key: string]: string}
}

export class CognitoIdentityPool extends Resource<CognitoIdentityPoolArguments, CognitoIdentityPoolAttributes> {
  kind = 'aws_cognito_identity_pool'
  _outputAttrNames = [
    'allow_unauthenticated_identities',
    'arn',
    'developer_provider_name',
    'id',
    'identity_pool_name',
    'openid_connect_provider_arns',
    'saml_provider_arns',
    'supported_login_providers',
    'tags',
  ] as const
}
