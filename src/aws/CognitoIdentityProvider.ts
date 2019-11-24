import {Resource} from '../Resource'

export interface CognitoIdentityProviderArguments {
  attribute_mapping?: {[key: string]: string}
  id?: string
  idp_identifiers?: Array<string>
  provider_details: {[key: string]: string}
  provider_name: string
  provider_type: string
  user_pool_id: string
}

export interface CognitoIdentityProviderAttributes {
  attribute_mapping?: {[key: string]: string}
  id: string
  idp_identifiers?: Array<string>
  provider_details: {[key: string]: string}
  provider_name: string
  provider_type: string
  user_pool_id: string
}

export class CognitoIdentityProvider extends Resource<
  CognitoIdentityProviderArguments,
  CognitoIdentityProviderAttributes
> {
  _kind = 'aws_cognito_identity_provider'

  get attribute_mapping() {
    return this._attr('attribute_mapping')
  }

  get id() {
    return this._attr('id')
  }

  get idp_identifiers() {
    return this._attr('idp_identifiers')
  }

  get provider_details() {
    return this._attr('provider_details')
  }

  get provider_name() {
    return this._attr('provider_name')
  }

  get provider_type() {
    return this._attr('provider_type')
  }

  get user_pool_id() {
    return this._attr('user_pool_id')
  }
}
