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
  _kind = 'aws_api_gateway_method_settings'

  get id() {
    return this._attr('id')
  }

  get method_path() {
    return this._attr('method_path')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }

  get stage_name() {
    return this._attr('stage_name')
  }
}
