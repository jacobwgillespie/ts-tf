import {Resource} from '../Resource'

export interface RdsClusterEndpointArguments {
  cluster_endpoint_identifier: string
  cluster_identifier: string
  custom_endpoint_type: string
  excluded_members?: Set<string>
  id?: string
  static_members?: Set<string>
}

export interface RdsClusterEndpointAttributes {
  arn: string
  cluster_endpoint_identifier: string
  cluster_identifier: string
  custom_endpoint_type: string
  endpoint: string
  excluded_members?: Set<string>
  id: string
  static_members?: Set<string>
}

export class RdsClusterEndpoint extends Resource<RdsClusterEndpointArguments, RdsClusterEndpointAttributes> {
  _kind = 'aws_rds_cluster_endpoint'

  get arn() {
    return this._attr('arn')
  }

  get cluster_endpoint_identifier() {
    return this._attr('cluster_endpoint_identifier')
  }

  get cluster_identifier() {
    return this._attr('cluster_identifier')
  }

  get custom_endpoint_type() {
    return this._attr('custom_endpoint_type')
  }

  get endpoint() {
    return this._attr('endpoint')
  }

  get excluded_members() {
    return this._attr('excluded_members')
  }

  get id() {
    return this._attr('id')
  }

  get static_members() {
    return this._attr('static_members')
  }
}
