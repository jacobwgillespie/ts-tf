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
  _kind = 'aws_api_gateway_base_path_mapping'

  get api_id() {
    return this._attr('api_id')
  }

  get base_path() {
    return this._attr('base_path')
  }

  get domain_name() {
    return this._attr('domain_name')
  }

  get id() {
    return this._attr('id')
  }

  get stage_name() {
    return this._attr('stage_name')
  }
}
