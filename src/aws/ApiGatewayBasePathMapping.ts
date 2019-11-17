import {Resource} from '../Resource'

export interface ApiGatewayBasePathMappingArguments {
  api_id: string
  base_path?: string
  domain_name: string
  id?: string
  stage_name?: string
}

export interface ApiGatewayBasePathMappingAttributes {
  api_id: string
  base_path?: string
  domain_name: string
  id: string
  stage_name?: string
}

export class ApiGatewayBasePathMapping extends Resource<
  ApiGatewayBasePathMappingArguments,
  ApiGatewayBasePathMappingAttributes
> {
  kind = 'aws_api_gateway_base_path_mapping'
  _outputAttrNames = ['api_id', 'base_path', 'domain_name', 'id', 'stage_name'] as const
}
