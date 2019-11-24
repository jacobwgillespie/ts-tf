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
  _kind = 'aws_cognito_identity_pool'

  get allow_unauthenticated_identities() {
    return this._attr('allow_unauthenticated_identities')
  }

  get arn() {
    return this._attr('arn')
  }

  get developer_provider_name() {
    return this._attr('developer_provider_name')
  }

  get id() {
    return this._attr('id')
  }

  get identity_pool_name() {
    return this._attr('identity_pool_name')
  }

  get openid_connect_provider_arns() {
    return this._attr('openid_connect_provider_arns')
  }

  get saml_provider_arns() {
    return this._attr('saml_provider_arns')
  }

  get supported_login_providers() {
    return this._attr('supported_login_providers')
  }

  get tags() {
    return this._attr('tags')
  }
}
