import {Resource} from '../Resource'

export interface ApiGatewayMethodSettingsArguments {
  id?: string
  method_path: string
  rest_api_id: string
  stage_name: string
}

export interface ApiGatewayMethodSettingsAttributes {
  id: string
  method_path: string
  rest_api_id: string
  stage_name: string
}

export class ApiGatewayMethodSettings extends Resource<
  ApiGatewayMethodSettingsArguments,
  ApiGatewayMethodSettingsAttributes
> {
  kind = 'aws_api_gateway_method_settings'
  _outputAttrNames = ['id', 'method_path', 'rest_api_id', 'stage_name'] as const
}
