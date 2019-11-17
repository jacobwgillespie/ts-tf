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
  kind = 'aws_api_gateway_request_validator'
  _outputAttrNames = ['id', 'name', 'rest_api_id', 'validate_request_body', 'validate_request_parameters'] as const
}
