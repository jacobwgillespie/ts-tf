import {Resource} from '../Resource'

export interface ApiGatewayUsagePlanArguments {
  description?: string
  id?: string
  name: string
  product_code?: string
}

export interface ApiGatewayUsagePlanAttributes {
  description?: string
  id: string
  name: string
  product_code?: string
}

export class ApiGatewayUsagePlan extends Resource<ApiGatewayUsagePlanArguments, ApiGatewayUsagePlanAttributes> {
  kind = 'aws_api_gateway_usage_plan'
  _outputAttrNames = ['description', 'id', 'name', 'product_code'] as const
}
