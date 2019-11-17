import {Resource} from '../Resource'

export interface ApiGatewayAuthorizerArguments {
  authorizer_credentials?: string
  authorizer_result_ttl_in_seconds?: number
  authorizer_uri?: string
  id?: string
  identity_source?: string
  identity_validation_expression?: string
  name: string
  provider_arns?: Set<string>
  rest_api_id: string
  type?: string
}

export interface ApiGatewayAuthorizerAttributes {
  authorizer_credentials?: string
  authorizer_result_ttl_in_seconds?: number
  authorizer_uri?: string
  id: string
  identity_source?: string
  identity_validation_expression?: string
  name: string
  provider_arns?: Set<string>
  rest_api_id: string
  type?: string
}

export class ApiGatewayAuthorizer extends Resource<ApiGatewayAuthorizerArguments, ApiGatewayAuthorizerAttributes> {
  kind = 'aws_api_gateway_authorizer'
  _outputAttrNames = [
    'authorizer_credentials',
    'authorizer_result_ttl_in_seconds',
    'authorizer_uri',
    'id',
    'identity_source',
    'identity_validation_expression',
    'name',
    'provider_arns',
    'rest_api_id',
    'type',
  ] as const
}
