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
  _kind = 'aws_api_gateway_usage_plan_key'

  get id() {
    return this._attr('id')
  }

  get key_id() {
    return this._attr('key_id')
  }

  get key_type() {
    return this._attr('key_type')
  }

  get name() {
    return this._attr('name')
  }

  get usage_plan_id() {
    return this._attr('usage_plan_id')
  }

  get value() {
    return this._attr('value')
  }
}
