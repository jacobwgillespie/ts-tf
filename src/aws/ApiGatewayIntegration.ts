import {Resource} from '../Resource'

export interface ApiGatewayIntegrationArguments {
  cache_key_parameters?: Set<string>
  cache_namespace?: string
  connection_id?: string
  connection_type?: string
  content_handling?: string
  credentials?: string
  http_method: string
  id?: string
  integration_http_method?: string
  passthrough_behavior?: string
  request_parameters?: {[key: string]: string}
  request_parameters_in_json?: string
  request_templates?: {[key: string]: string}
  resource_id: string
  rest_api_id: string
  timeout_milliseconds?: number
  type: string
  uri?: string
}

export interface ApiGatewayIntegrationAttributes {
  cache_key_parameters?: Set<string>
  cache_namespace: string
  connection_id?: string
  connection_type?: string
  content_handling?: string
  credentials?: string
  http_method: string
  id: string
  integration_http_method?: string
  passthrough_behavior: string
  request_parameters?: {[key: string]: string}
  request_parameters_in_json?: string
  request_templates?: {[key: string]: string}
  resource_id: string
  rest_api_id: string
  timeout_milliseconds?: number
  type: string
  uri?: string
}

export class ApiGatewayIntegration extends Resource<ApiGatewayIntegrationArguments, ApiGatewayIntegrationAttributes> {
  kind = 'aws_api_gateway_integration'
  _outputAttrNames = [
    'cache_key_parameters',
    'cache_namespace',
    'connection_id',
    'connection_type',
    'content_handling',
    'credentials',
    'http_method',
    'id',
    'integration_http_method',
    'passthrough_behavior',
    'request_parameters',
    'request_parameters_in_json',
    'request_templates',
    'resource_id',
    'rest_api_id',
    'timeout_milliseconds',
    'type',
    'uri',
  ] as const
}
