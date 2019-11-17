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
  kind = 'aws_api_gateway_method'
  _outputAttrNames = [
    'api_key_required',
    'authorization',
    'authorization_scopes',
    'authorizer_id',
    'http_method',
    'id',
    'request_models',
    'request_parameters',
    'request_parameters_in_json',
    'request_validator_id',
    'resource_id',
    'rest_api_id',
  ] as const
}
