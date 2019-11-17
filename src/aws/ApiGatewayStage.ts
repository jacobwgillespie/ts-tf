import {Resource} from '../Resource'

export interface ApiGatewayStageArguments {
  cache_cluster_enabled?: boolean
  cache_cluster_size?: string
  client_certificate_id?: string
  deployment_id: string
  description?: string
  documentation_version?: string
  id?: string
  rest_api_id: string
  stage_name: string
  tags?: {[key: string]: string}
  variables?: {[key: string]: string}
  xray_tracing_enabled?: boolean
}

export interface ApiGatewayStageAttributes {
  cache_cluster_enabled?: boolean
  cache_cluster_size?: string
  client_certificate_id?: string
  deployment_id: string
  description?: string
  documentation_version?: string
  execution_arn: string
  id: string
  invoke_url: string
  rest_api_id: string
  stage_name: string
  tags?: {[key: string]: string}
  variables?: {[key: string]: string}
  xray_tracing_enabled?: boolean
}

export class ApiGatewayStage extends Resource<ApiGatewayStageArguments, ApiGatewayStageAttributes> {
  kind = 'aws_api_gateway_stage'
  _outputAttrNames = [
    'cache_cluster_enabled',
    'cache_cluster_size',
    'client_certificate_id',
    'deployment_id',
    'description',
    'documentation_version',
    'execution_arn',
    'id',
    'invoke_url',
    'rest_api_id',
    'stage_name',
    'tags',
    'variables',
    'xray_tracing_enabled',
  ] as const
}
