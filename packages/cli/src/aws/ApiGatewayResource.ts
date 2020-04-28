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
  _kind = 'aws_api_gateway_resource'

  get id() {
    return this._attr('id')
  }

  get parent_id() {
    return this._attr('parent_id')
  }

  get path() {
    return this._attr('path')
  }

  get path_part() {
    return this._attr('path_part')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }
}
