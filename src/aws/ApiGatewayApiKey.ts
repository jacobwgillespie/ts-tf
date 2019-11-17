import {Resource} from '../Resource'

export interface ApiGatewayApiKeyArguments {
  description?: string
  enabled?: boolean
  id?: string
  name: string
  value?: string
}

export interface ApiGatewayApiKeyAttributes {
  created_date: string
  description?: string
  enabled?: boolean
  id: string
  last_updated_date: string
  name: string
  value: string
}

export class ApiGatewayApiKey extends Resource<ApiGatewayApiKeyArguments, ApiGatewayApiKeyAttributes> {
  kind = 'aws_api_gateway_api_key'
  _outputAttrNames = ['created_date', 'description', 'enabled', 'id', 'last_updated_date', 'name', 'value'] as const
}
