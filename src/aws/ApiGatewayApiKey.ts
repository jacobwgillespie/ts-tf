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
  _kind = 'aws_api_gateway_api_key'

  get created_date() {
    return this._attr('created_date')
  }

  get description() {
    return this._attr('description')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }

  get last_updated_date() {
    return this._attr('last_updated_date')
  }

  get name() {
    return this._attr('name')
  }

  get value() {
    return this._attr('value')
  }
}
