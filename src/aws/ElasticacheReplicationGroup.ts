import {Resource} from '../Resource'

export interface ElasticacheReplicationGroupArguments {
  apply_immediately?: boolean
  at_rest_encryption_enabled?: boolean
  auth_token?: string
  auto_minor_version_upgrade?: boolean
  automatic_failover_enabled?: boolean
  availability_zones?: Set<string>
  engine?: string
  engine_version?: string
  id?: string
  maintenance_window?: string
  node_type?: string
  notification_topic_arn?: string
  number_cache_clusters?: number
  parameter_group_name?: string
  port?: number
  replication_group_description: string
  replication_group_id: string
  security_group_ids?: Set<string>
  security_group_names?: Set<string>
  snapshot_arns?: Set<string>
  snapshot_name?: string
  snapshot_retention_limit?: number
  snapshot_window?: string
  subnet_group_name?: string
  tags?: {[key: string]: string}
  transit_encryption_enabled?: boolean
}

export interface ElasticacheReplicationGroupAttributes {
  apply_immediately: boolean
  at_rest_encryption_enabled?: boolean
  auth_token?: string
  auto_minor_version_upgrade?: boolean
  automatic_failover_enabled?: boolean
  availability_zones?: Set<string>
  configuration_endpoint_address: string
  engine?: string
  engine_version: string
  id: string
  maintenance_window: string
  member_clusters: Set<string>
  node_type: string
  notification_topic_arn?: string
  number_cache_clusters: number
  parameter_group_name: string
  port?: number
  primary_endpoint_address: string
  replication_group_description: string
  replication_group_id: string
  security_group_ids: Set<string>
  security_group_names: Set<string>
  snapshot_arns?: Set<string>
  snapshot_name?: string
  snapshot_retention_limit?: number
  snapshot_window: string
  subnet_group_name: string
  tags?: {[key: string]: string}
  transit_encryption_enabled?: boolean
}

export class ElasticacheReplicationGroup extends Resource<
  ElasticacheReplicationGroupArguments,
  ElasticacheReplicationGroupAttributes
> {
  kind = 'aws_elasticache_replication_group'
  _outputAttrNames = [
    'apply_immediately',
    'at_rest_encryption_enabled',
    'auth_token',
    'auto_minor_version_upgrade',
    'automatic_failover_enabled',
    'availability_zones',
    'configuration_endpoint_address',
    'engine',
    'engine_version',
    'id',
    'maintenance_window',
    'member_clusters',
    'node_type',
    'notification_topic_arn',
    'number_cache_clusters',
    'parameter_group_name',
    'port',
    'primary_endpoint_address',
    'replication_group_description',
    'replication_group_id',
    'security_group_ids',
    'security_group_names',
    'snapshot_arns',
    'snapshot_name',
    'snapshot_retention_limit',
    'snapshot_window',
    'subnet_group_name',
    'tags',
    'transit_encryption_enabled',
  ] as const
}
