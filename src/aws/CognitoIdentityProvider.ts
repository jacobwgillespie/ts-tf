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
  kind = 'aws_cognito_identity_provider'
  _outputAttrNames = [
    'attribute_mapping',
    'id',
    'idp_identifiers',
    'provider_details',
    'provider_name',
    'provider_type',
    'user_pool_id',
  ] as const
}
