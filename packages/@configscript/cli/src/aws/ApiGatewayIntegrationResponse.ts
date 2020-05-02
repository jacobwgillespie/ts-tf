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
  _kind = 'aws_api_gateway_integration_response'

  get content_handling() {
    return this._attr('content_handling')
  }

  get http_method() {
    return this._attr('http_method')
  }

  get id() {
    return this._attr('id')
  }

  get resource_id() {
    return this._attr('resource_id')
  }

  get response_parameters() {
    return this._attr('response_parameters')
  }

  get response_parameters_in_json() {
    return this._attr('response_parameters_in_json')
  }

  get response_templates() {
    return this._attr('response_templates')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }

  get selection_pattern() {
    return this._attr('selection_pattern')
  }

  get status_code() {
    return this._attr('status_code')
  }
}
