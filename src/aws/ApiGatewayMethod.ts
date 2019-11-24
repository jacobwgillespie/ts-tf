import {Resource} from '../Resource'

export interface ApiGatewayMethodArguments {
  api_key_required?: boolean
  authorization: string
  authorization_scopes?: Set<string>
  authorizer_id?: string
  http_method: string
  id?: string
  request_models?: {[key: string]: string}
  request_parameters?: {[key: string]: boolean}
  request_parameters_in_json?: string
  request_validator_id?: string
  resource_id: string
  rest_api_id: string
}

export interface ApiGatewayMethodAttributes {
  api_key_required?: boolean
  authorization: string
  authorization_scopes?: Set<string>
  authorizer_id?: string
  http_method: string
  id: string
  request_models?: {[key: string]: string}
  request_parameters?: {[key: string]: boolean}
  request_parameters_in_json?: string
  request_validator_id?: string
  resource_id: string
  rest_api_id: string
}

export class ApiGatewayMethod extends Resource<ApiGatewayMethodArguments, ApiGatewayMethodAttributes> {
  _kind = 'aws_api_gateway_method'

  get api_key_required() {
    return this._attr('api_key_required')
  }

  get authorization() {
    return this._attr('authorization')
  }

  get authorization_scopes() {
    return this._attr('authorization_scopes')
  }

  get authorizer_id() {
    return this._attr('authorizer_id')
  }

  get http_method() {
    return this._attr('http_method')
  }

  get id() {
    return this._attr('id')
  }

  get request_models() {
    return this._attr('request_models')
  }

  get request_parameters() {
    return this._attr('request_parameters')
  }

  get request_parameters_in_json() {
    return this._attr('request_parameters_in_json')
  }

  get request_validator_id() {
    return this._attr('request_validator_id')
  }

  get resource_id() {
    return this._attr('resource_id')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }
}
