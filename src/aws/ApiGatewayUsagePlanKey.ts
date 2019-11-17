import {Resource} from '../Resource'

export interface ApiGatewayUsagePlanKeyArguments {
  id?: string
  key_id: string
  key_type: string
  usage_plan_id: string
}

export interface ApiGatewayUsagePlanKeyAttributes {
  id: string
  key_id: string
  key_type: string
  name: string
  usage_plan_id: string
  value: string
}

export class ApiGatewayUsagePlanKey extends Resource<
  ApiGatewayUsagePlanKeyArguments,
  ApiGatewayUsagePlanKeyAttributes
> {
  kind = 'aws_api_gateway_usage_plan_key'
  _outputAttrNames = ['id', 'key_id', 'key_type', 'name', 'usage_plan_id', 'value'] as const
}
