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
  kind = 'aws_api_gateway_documentation_version'
  _outputAttrNames = ['description', 'id', 'rest_api_id', 'version'] as const
}
