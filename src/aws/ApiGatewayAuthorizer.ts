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
  _kind = 'aws_api_gateway_authorizer'

  get authorizer_credentials() {
    return this._attr('authorizer_credentials')
  }

  get authorizer_result_ttl_in_seconds() {
    return this._attr('authorizer_result_ttl_in_seconds')
  }

  get authorizer_uri() {
    return this._attr('authorizer_uri')
  }

  get id() {
    return this._attr('id')
  }

  get identity_source() {
    return this._attr('identity_source')
  }

  get identity_validation_expression() {
    return this._attr('identity_validation_expression')
  }

  get name() {
    return this._attr('name')
  }

  get provider_arns() {
    return this._attr('provider_arns')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }

  get type() {
    return this._attr('type')
  }
}
