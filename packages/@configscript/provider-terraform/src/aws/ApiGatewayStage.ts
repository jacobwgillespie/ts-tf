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
  _kind = 'aws_api_gateway_stage'

  get cache_cluster_enabled() {
    return this._attr('cache_cluster_enabled')
  }

  get cache_cluster_size() {
    return this._attr('cache_cluster_size')
  }

  get client_certificate_id() {
    return this._attr('client_certificate_id')
  }

  get deployment_id() {
    return this._attr('deployment_id')
  }

  get description() {
    return this._attr('description')
  }

  get documentation_version() {
    return this._attr('documentation_version')
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

  get stage_name() {
    return this._attr('stage_name')
  }

  get tags() {
    return this._attr('tags')
  }

  get variables() {
    return this._attr('variables')
  }

  get xray_tracing_enabled() {
    return this._attr('xray_tracing_enabled')
  }
}
