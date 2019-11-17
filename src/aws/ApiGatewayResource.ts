import {Resource} from '../Resource'

export interface ApiGatewayResourceArguments {
  id?: string
  parent_id: string
  path_part: string
  rest_api_id: string
}

export interface ApiGatewayResourceAttributes {
  id: string
  parent_id: string
  path: string
  path_part: string
  rest_api_id: string
}

export class ApiGatewayResource extends Resource<ApiGatewayResourceArguments, ApiGatewayResourceAttributes> {
  kind = 'aws_api_gateway_resource'
  _outputAttrNames = ['id', 'parent_id', 'path', 'path_part', 'rest_api_id'] as const
}
