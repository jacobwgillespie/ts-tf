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
  _kind = 'aws_api_gateway_integration'

  get cache_key_parameters() {
    return this._attr('cache_key_parameters')
  }

  get cache_namespace() {
    return this._attr('cache_namespace')
  }

  get connection_id() {
    return this._attr('connection_id')
  }

  get connection_type() {
    return this._attr('connection_type')
  }

  get content_handling() {
    return this._attr('content_handling')
  }

  get credentials() {
    return this._attr('credentials')
  }

  get http_method() {
    return this._attr('http_method')
  }

  get id() {
    return this._attr('id')
  }

  get integration_http_method() {
    return this._attr('integration_http_method')
  }

  get passthrough_behavior() {
    return this._attr('passthrough_behavior')
  }

  get request_parameters() {
    return this._attr('request_parameters')
  }

  get request_parameters_in_json() {
    return this._attr('request_parameters_in_json')
  }

  get request_templates() {
    return this._attr('request_templates')
  }

  get resource_id() {
    return this._attr('resource_id')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }

  get timeout_milliseconds() {
    return this._attr('timeout_milliseconds')
  }

  get type() {
    return this._attr('type')
  }

  get uri() {
    return this._attr('uri')
  }
}
