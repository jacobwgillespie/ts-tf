import {Resource} from '../Resource'

export interface ApiGatewayDocumentationPartArguments {
  id?: string
  properties: string
  rest_api_id: string
}

export interface ApiGatewayDocumentationPartAttributes {
  id: string
  properties: string
  rest_api_id: string
}

export class ApiGatewayDocumentationPart extends Resource<
  ApiGatewayDocumentationPartArguments,
  ApiGatewayDocumentationPartAttributes
> {
  _kind = 'aws_api_gateway_documentation_part'

  get id() {
    return this._attr('id')
  }

  get properties() {
    return this._attr('properties')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }
}
