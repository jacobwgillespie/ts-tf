import {Resource} from '../Resource'

export interface ApiGatewayGatewayResponseArguments {
  id?: string
  response_parameters?: {[key: string]: string}
  response_templates?: {[key: string]: string}
  response_type: string
  rest_api_id: string
  status_code?: string
}

export interface ApiGatewayGatewayResponseAttributes {
  id: string
  response_parameters?: {[key: string]: string}
  response_templates?: {[key: string]: string}
  response_type: string
  rest_api_id: string
  status_code?: string
}

export class ApiGatewayGatewayResponse extends Resource<
  ApiGatewayGatewayResponseArguments,
  ApiGatewayGatewayResponseAttributes
> {
  _kind = 'aws_api_gateway_gateway_response'

  get id() {
    return this._attr('id')
  }

  get response_parameters() {
    return this._attr('response_parameters')
  }

  get response_templates() {
    return this._attr('response_templates')
  }

  get response_type() {
    return this._attr('response_type')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }

  get status_code() {
    return this._attr('status_code')
  }
}
