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
  kind = 'aws_api_gateway_model'
  _outputAttrNames = ['content_type', 'description', 'id', 'name', 'rest_api_id', 'schema'] as const
}
