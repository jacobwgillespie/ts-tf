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
  _kind = 'aws_api_gateway_usage_plan'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get product_code() {
    return this._attr('product_code')
  }
}
