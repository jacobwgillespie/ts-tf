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
  kind = 'aws_api_gateway_gateway_response'
  _outputAttrNames = [
    'id',
    'response_parameters',
    'response_templates',
    'response_type',
    'rest_api_id',
    'status_code',
  ] as const
}
