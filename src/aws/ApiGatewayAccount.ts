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
  kind = 'aws_api_gateway_account'
  _outputAttrNames = ['cloudwatch_role_arn', 'id', 'throttle_settings'] as const
}
