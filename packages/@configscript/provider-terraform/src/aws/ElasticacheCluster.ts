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
  _kind = 'aws_elasticache_cluster'

  get apply_immediately() {
    return this._attr('apply_immediately')
  }

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get availability_zones() {
    return this._attr('availability_zones')
  }

  get az_mode() {
    return this._attr('az_mode')
  }

  get cache_nodes() {
    return this._attr('cache_nodes')
  }

  get cluster_address() {
    return this._attr('cluster_address')
  }

  get cluster_id() {
    return this._attr('cluster_id')
  }

  get configuration_endpoint() {
    return this._attr('configuration_endpoint')
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

  get node_type() {
    return this._attr('node_type')
  }

  get notification_topic_arn() {
    return this._attr('notification_topic_arn')
  }

  get num_cache_nodes() {
    return this._attr('num_cache_nodes')
  }

  get parameter_group_name() {
    return this._attr('parameter_group_name')
  }

  get port() {
    return this._attr('port')
  }

  get preferred_availability_zones() {
    return this._attr('preferred_availability_zones')
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
}
