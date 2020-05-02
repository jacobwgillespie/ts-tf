import {Resource} from '../Resource'

export interface ApiGatewayRestApiArguments {
  api_key_source?: string
  binary_media_types?: Array<string>
  body?: string
  description?: string
  id?: string
  minimum_compression_size?: number
  name: string
  policy?: string
}

export interface ApiGatewayRestApiAttributes {
  api_key_source?: string
  binary_media_types?: Array<string>
  body?: string
  created_date: string
  description?: string
  execution_arn: string
  id: string
  minimum_compression_size?: number
  name: string
  policy?: string
  root_resource_id: string
}

export class ApiGatewayRestApi extends Resource<ApiGatewayRestApiArguments, ApiGatewayRestApiAttributes> {
  _kind = 'aws_api_gateway_rest_api'

  get api_key_source() {
    return this._attr('api_key_source')
  }

  get binary_media_types() {
    return this._attr('binary_media_types')
  }

  get body() {
    return this._attr('body')
  }

  get created_date() {
    return this._attr('created_date')
  }

  get description() {
    return this._attr('description')
  }

  get execution_arn() {
    return this._attr('execution_arn')
  }

  get id() {
    return this._attr('id')
  }

  get minimum_compression_size() {
    return this._attr('minimum_compression_size')
  }

  get name() {
    return this._attr('name')
  }

  get policy() {
    return this._attr('policy')
  }

  get root_resource_id() {
    return this._attr('root_resource_id')
  }
}
