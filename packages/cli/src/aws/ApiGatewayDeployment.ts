import {Resource} from '../Resource'

export interface ApiGatewayDeploymentArguments {
  description?: string
  id?: string
  rest_api_id: string
  stage_description?: string
  stage_name?: string
  variables?: {[key: string]: string}
}

export interface ApiGatewayDeploymentAttributes {
  created_date: string
  description?: string
  execution_arn: string
  id: string
  invoke_url: string
  rest_api_id: string
  stage_description?: string
  stage_name?: string
  variables?: {[key: string]: string}
}

export class ApiGatewayDeployment extends Resource<ApiGatewayDeploymentArguments, ApiGatewayDeploymentAttributes> {
  _kind = 'aws_api_gateway_deployment'

  get created_date() {
    return this._attr('created_date')
  }

  get description() {
    return this._attr('description')
  }

  get execution_arn() {
    return this._attr('execution_arn')
  }

  get id() {
    return this._attr('id')
  }

  get invoke_url() {
    return this._attr('invoke_url')
  }

  get rest_api_id() {
    return this._attr('rest_api_id')
  }

  get stage_description() {
    return this._attr('stage_description')
  }

  get stage_name() {
    return this._attr('stage_name')
  }

  get variables() {
    return this._attr('variables')
  }
}
