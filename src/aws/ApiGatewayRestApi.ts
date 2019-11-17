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
  kind = 'aws_api_gateway_rest_api'
  _outputAttrNames = [
    'api_key_source',
    'binary_media_types',
    'body',
    'created_date',
    'description',
    'execution_arn',
    'id',
    'minimum_compression_size',
    'name',
    'policy',
    'root_resource_id',
  ] as const
}
