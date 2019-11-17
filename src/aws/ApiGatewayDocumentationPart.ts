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
  kind = 'aws_api_gateway_documentation_part'
  _outputAttrNames = ['id', 'properties', 'rest_api_id'] as const
}
