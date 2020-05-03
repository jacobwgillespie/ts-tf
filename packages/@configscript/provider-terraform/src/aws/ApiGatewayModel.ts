import {Resource} from '../Resource'

export interface ApiGatewayModelArguments {
  content_type: string
  description?: string
  id?: string
  name: string
  rest_api_id: string
  schema?: string
}

export interface ApiGatewayModelAttributes {
  content_type: string
  description?: string
  id: string
  name: string
  rest_api_id: string
  schema?: string
}

export class ApiGatewayModel extends Resource<ApiGatewayModelArguments, ApiGatewayModelAttributes> {
  _kind = 'aws_api_gateway_model'

  get content_type() {
    return this._attr('content_type')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }

  get schema() {
    return this._attr('schema')
  }
}
