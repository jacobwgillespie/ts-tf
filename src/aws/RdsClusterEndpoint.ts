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
  kind = 'aws_rds_cluster_endpoint'
  _outputAttrNames = [
    'arn',
    'cluster_endpoint_identifier',
    'cluster_identifier',
    'custom_endpoint_type',
    'endpoint',
    'excluded_members',
    'id',
    'static_members',
  ] as const
}
