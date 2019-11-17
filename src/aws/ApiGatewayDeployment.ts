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
  kind = 'aws_api_gateway_deployment'
  _outputAttrNames = [
    'created_date',
    'description',
    'execution_arn',
    'id',
    'invoke_url',
    'rest_api_id',
    'stage_description',
    'stage_name',
    'variables',
  ] as const
}
