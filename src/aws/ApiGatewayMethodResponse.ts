import {Resource} from '../Resource'

export interface ApiGatewayMethodResponseArguments {
  http_method: string
  id?: string
  resource_id: string
  response_models?: {[key: string]: string}
  response_parameters?: {[key: string]: boolean}
  response_parameters_in_json?: string
  rest_api_id: string
  status_code: string
}

export interface ApiGatewayMethodResponseAttributes {
  http_method: string
  id: string
  resource_id: string
  response_models?: {[key: string]: string}
  response_parameters?: {[key: string]: boolean}
  response_parameters_in_json?: string
  rest_api_id: string
  status_code: string
}

export class ApiGatewayMethodResponse extends Resource<
  ApiGatewayMethodResponseArguments,
  ApiGatewayMethodResponseAttributes
> {
  kind = 'aws_api_gateway_method_response'
  _outputAttrNames = [
    'http_method',
    'id',
    'resource_id',
    'response_models',
    'response_parameters',
    'response_parameters_in_json',
    'rest_api_id',
    'status_code',
  ] as const
}
