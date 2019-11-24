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
  _kind = 'aws_elasticache_replication_group'

  get apply_immediately() {
    return this._attr('apply_immediately')
  }

  get at_rest_encryption_enabled() {
    return this._attr('at_rest_encryption_enabled')
  }

  get auth_token() {
    return this._attr('auth_token')
  }

  get auto_minor_version_upgrade() {
    return this._attr('auto_minor_version_upgrade')
  }

  get automatic_failover_enabled() {
    return this._attr('automatic_failover_enabled')
  }

  get availability_zones() {
    return this._attr('availability_zones')
  }

  get configuration_endpoint_address() {
    return this._attr('configuration_endpoint_address')
  }

  get engine() {
    return this._attr('engine')
  }

  get engine_version() {
    return this._attr('engine_version')
  }

  get id() {
    return this._attr('id')
  }

  get maintenance_window() {
    return this._attr('maintenance_window')
  }

  get member_clusters() {
    return this._attr('member_clusters')
  }

  get node_type() {
    return this._attr('node_type')
  }

  get notification_topic_arn() {
    return this._attr('notification_topic_arn')
  }

  get number_cache_clusters() {
    return this._attr('number_cache_clusters')
  }

  get parameter_group_name() {
    return this._attr('parameter_group_name')
  }

  get port() {
    return this._attr('port')
  }

  get primary_endpoint_address() {
    return this._attr('primary_endpoint_address')
  }

  get replication_group_description() {
    return this._attr('replication_group_description')
  }

  get replication_group_id() {
    return this._attr('replication_group_id')
  }

  get security_group_ids() {
    return this._attr('security_group_ids')
  }

  get security_group_names() {
    return this._attr('security_group_names')
  }

  get snapshot_arns() {
    return this._attr('snapshot_arns')
  }

  get snapshot_name() {
    return this._attr('snapshot_name')
  }

  get snapshot_retention_limit() {
    return this._attr('snapshot_retention_limit')
  }

  get snapshot_window() {
    return this._attr('snapshot_window')
  }

  get subnet_group_name() {
    return this._attr('subnet_group_name')
  }

  get tags() {
    return this._attr('tags')
  }

  get transit_encryption_enabled() {
    return this._attr('transit_encryption_enabled')
  }
}
