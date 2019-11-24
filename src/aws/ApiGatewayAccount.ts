import {Resource} from '../Resource'

export interface ApiGatewayAccountArguments {
  cloudwatch_role_arn?: string
  id?: string
}

export interface ApiGatewayAccountAttributes {
  cloudwatch_role_arn?: string
  id: string
  throttle_settings: Array<{burst_limit: number; rate_limit: number}>
}

export class ApiGatewayAccount extends Resource<ApiGatewayAccountArguments, ApiGatewayAccountAttributes> {
  _kind = 'aws_api_gateway_account'

  get cloudwatch_role_arn() {
    return this._attr('cloudwatch_role_arn')
  }

  get id() {
    return this._attr('id')
  }

  get throttle_settings() {
    return this._attr('throttle_settings')
  }
}
