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
  _kind = 'aws_api_gateway_method_response'

  get http_method() {
    return this._attr('http_method')
  }

  get id() {
    return this._attr('id')
  }

  get resource_id() {
    return this._attr('resource_id')
  }

  get response_models() {
    return this._attr('response_models')
  }

  get response_parameters() {
    return this._attr('response_parameters')
  }

  get response_parameters_in_json() {
    return this._attr('response_parameters_in_json')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }

  get status_code() {
    return this._attr('status_code')
  }
}
