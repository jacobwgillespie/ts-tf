import {Resource} from '../Resource'

export interface ApiGatewayRequestValidatorArguments {
  id?: string
  name: string
  rest_api_id: string
  validate_request_body?: boolean
  validate_request_parameters?: boolean
}

export interface ApiGatewayRequestValidatorAttributes {
  id: string
  name: string
  rest_api_id: string
  validate_request_body?: boolean
  validate_request_parameters?: boolean
}

export class ApiGatewayRequestValidator extends Resource<
  ApiGatewayRequestValidatorArguments,
  ApiGatewayRequestValidatorAttributes
> {
  _kind = 'aws_api_gateway_request_validator'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }

  get validate_request_body() {
    return this._attr('validate_request_body')
  }

  get validate_request_parameters() {
    return this._attr('validate_request_parameters')
  }
}
