import {Resource} from '../Resource'

export interface ApiGatewayDocumentationVersionArguments {
  description?: string
  id?: string
  rest_api_id: string
  version: string
}

export interface ApiGatewayDocumentationVersionAttributes {
  description?: string
  id: string
  rest_api_id: string
  version: string
}

export class ApiGatewayDocumentationVersion extends Resource<
  ApiGatewayDocumentationVersionArguments,
  ApiGatewayDocumentationVersionAttributes
> {
  _kind = 'aws_api_gateway_documentation_version'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }

  get version() {
    return this._attr('version')
  }
}
