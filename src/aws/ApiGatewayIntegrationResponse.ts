import {Resource} from '../Resource'

export interface ApiGatewayIntegrationResponseArguments {
  content_handling?: string
  http_method: string
  id?: string
  resource_id: string
  response_parameters?: {[key: string]: string}
  response_parameters_in_json?: string
  response_templates?: {[key: string]: string}
  rest_api_id: string
  selection_pattern?: string
  status_code: string
}

export interface ApiGatewayIntegrationResponseAttributes {
  content_handling?: string
  http_method: string
  id: string
  resource_id: string
  response_parameters?: {[key: string]: string}
  response_parameters_in_json?: string
  response_templates?: {[key: string]: string}
  rest_api_id: string
  selection_pattern?: string
  status_code: string
}

export class ApiGatewayIntegrationResponse extends Resource<
  ApiGatewayIntegrationResponseArguments,
  ApiGatewayIntegrationResponseAttributes
> {
  kind = 'aws_api_gateway_integration_response'
  _outputAttrNames = [
    'content_handling',
    'http_method',
    'id',
    'resource_id',
    'response_parameters',
    'response_parameters_in_json',
    'response_templates',
    'rest_api_id',
    'selection_pattern',
    'status_code',
  ] as const
}
