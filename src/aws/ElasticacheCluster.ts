import {Resource} from '../Resource'

export interface ElasticacheClusterArguments {
  apply_immediately?: boolean
  availability_zone?: string
  availability_zones?: Set<string>
  az_mode?: string
  cluster_id: string
  engine?: string
  engine_version?: string
  id?: string
  maintenance_window?: string
  node_type?: string
  notification_topic_arn?: string
  num_cache_nodes?: number
  parameter_group_name?: string
  port?: number
  preferred_availability_zones?: Array<string>
  replication_group_id?: string
  security_group_ids?: Set<string>
  security_group_names?: Set<string>
  snapshot_arns?: Set<string>
  snapshot_name?: string
  snapshot_retention_limit?: number
  snapshot_window?: string
  subnet_group_name?: string
  tags?: {[key: string]: string}
}

export interface ElasticacheClusterAttributes {
  apply_immediately: boolean
  availability_zone: string
  availability_zones?: Set<string>
  az_mode: string
  cache_nodes: Array<{address: string; availability_zone: string; id: string; port: number}>
  cluster_address: string
  cluster_id: string
  configuration_endpoint: string
  engine: string
  engine_version: string
  id: string
  maintenance_window: string
  node_type: string
  notification_topic_arn?: string
  num_cache_nodes: number
  parameter_group_name: string
  port?: number
  preferred_availability_zones?: Array<string>
  replication_group_id: string
  security_group_ids: Set<string>
  security_group_names: Set<string>
  snapshot_arns?: Set<string>
  snapshot_name?: string
  snapshot_retention_limit?: number
  snapshot_window: string
  subnet_group_name: string
  tags?: {[key: string]: string}
}

export class ElasticacheCluster extends Resource<ElasticacheClusterArguments, ElasticacheClusterAttributes> {
  kind = 'aws_elasticache_cluster'
  _outputAttrNames = [
    'apply_immediately',
    'availability_zone',
    'availability_zones',
    'az_mode',
    'cache_nodes',
    'cluster_address',
    'cluster_id',
    'configuration_endpoint',
    'engine',
    'engine_version',
    'id',
    'maintenance_window',
    'node_type',
    'notification_topic_arn',
    'num_cache_nodes',
    'parameter_group_name',
    'port',
    'preferred_availability_zones',
    'replication_group_id',
    'security_group_ids',
    'security_group_names',
    'snapshot_arns',
    'snapshot_name',
    'snapshot_retention_limit',
    'snapshot_window',
    'subnet_group_name',
    'tags',
  ] as const
}
