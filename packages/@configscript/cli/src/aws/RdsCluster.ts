import {Resource} from '../Resource'

export interface RdsClusterArguments {
  apply_immediately?: boolean
  availability_zones?: Set<string>
  backtrack_window?: number
  backup_retention_period?: number
  cluster_identifier?: string
  cluster_identifier_prefix?: string
  cluster_members?: Set<string>
  copy_tags_to_snapshot?: boolean
  database_name?: string
  db_cluster_parameter_group_name?: string
  db_subnet_group_name?: string
  deletion_protection?: boolean
  enabled_cloudwatch_logs_exports?: Array<string>
  engine?: string
  engine_mode?: string
  engine_version?: string
  final_snapshot_identifier?: string
  global_cluster_identifier?: string
  iam_database_authentication_enabled?: boolean
  iam_roles?: Set<string>
  id?: string
  kms_key_id?: string
  master_password?: string
  master_username?: string
  port?: number
  preferred_backup_window?: string
  preferred_maintenance_window?: string
  replication_source_identifier?: string
  skip_final_snapshot?: boolean
  snapshot_identifier?: string
  source_region?: string
  storage_encrypted?: boolean
  tags?: {[key: string]: string}
  vpc_security_group_ids?: Set<string>
}

export interface RdsClusterAttributes {
  apply_immediately: boolean
  arn: string
  availability_zones: Set<string>
  backtrack_window?: number
  backup_retention_period?: number
  cluster_identifier: string
  cluster_identifier_prefix: string
  cluster_members: Set<string>
  cluster_resource_id: string
  copy_tags_to_snapshot?: boolean
  database_name: string
  db_cluster_parameter_group_name: string
  db_subnet_group_name: string
  deletion_protection?: boolean
  enabled_cloudwatch_logs_exports?: Array<string>
  endpoint: string
  engine?: string
  engine_mode?: string
  engine_version: string
  final_snapshot_identifier?: string
  global_cluster_identifier?: string
  hosted_zone_id: string
  iam_database_authentication_enabled?: boolean
  iam_roles?: Set<string>
  id: string
  kms_key_id: string
  master_password?: string
  master_username: string
  port: number
  preferred_backup_window: string
  preferred_maintenance_window: string
  reader_endpoint: string
  replication_source_identifier?: string
  skip_final_snapshot?: boolean
  snapshot_identifier?: string
  source_region?: string
  storage_encrypted?: boolean
  tags?: {[key: string]: string}
  vpc_security_group_ids: Set<string>
}

export class RdsCluster extends Resource<RdsClusterArguments, RdsClusterAttributes> {
  _kind = 'aws_rds_cluster'

  get apply_immediately() {
    return this._attr('apply_immediately')
  }

  get arn() {
    return this._attr('arn')
  }

  get availability_zones() {
    return this._attr('availability_zones')
  }

  get backtrack_window() {
    return this._attr('backtrack_window')
  }

  get backup_retention_period() {
    return this._attr('backup_retention_period')
  }

  get cluster_identifier() {
    return this._attr('cluster_identifier')
  }

  get cluster_identifier_prefix() {
    return this._attr('cluster_identifier_prefix')
  }

  get cluster_members() {
    return this._attr('cluster_members')
  }

  get cluster_resource_id() {
    return this._attr('cluster_resource_id')
  }

  get copy_tags_to_snapshot() {
    return this._attr('copy_tags_to_snapshot')
  }

  get database_name() {
    return this._attr('database_name')
  }

  get db_cluster_parameter_group_name() {
    return this._attr('db_cluster_parameter_group_name')
  }

  get db_subnet_group_name() {
    return this._attr('db_subnet_group_name')
  }

  get deletion_protection() {
    return this._attr('deletion_protection')
  }

  get enabled_cloudwatch_logs_exports() {
    return this._attr('enabled_cloudwatch_logs_exports')
  }

  get endpoint() {
    return this._attr('endpoint')
  }

  get engine() {
    return this._attr('engine')
  }

  get engine_mode() {
    return this._attr('engine_mode')
  }

  get engine_version() {
    return this._attr('engine_version')
  }

  get final_snapshot_identifier() {
    return this._attr('final_snapshot_identifier')
  }

  get global_cluster_identifier() {
    return this._attr('global_cluster_identifier')
  }

  get hosted_zone_id() {
    return this._attr('hosted_zone_id')
  }

  get iam_database_authentication_enabled() {
    return this._attr('iam_database_authentication_enabled')
  }

  get iam_roles() {
    return this._attr('iam_roles')
  }

  get id() {
    return this._attr('id')
  }

  get kms_key_id() {
    return this._attr('kms_key_id')
  }

  get master_password() {
    return this._attr('master_password')
  }

  get master_username() {
    return this._attr('master_username')
  }

  get port() {
    return this._attr('port')
  }

  get preferred_backup_window() {
    return this._attr('preferred_backup_window')
  }

  get preferred_maintenance_window() {
    return this._attr('preferred_maintenance_window')
  }

  get reader_endpoint() {
    return this._attr('reader_endpoint')
  }

  get replication_source_identifier() {
    return this._attr('replication_source_identifier')
  }

  get skip_final_snapshot() {
    return this._attr('skip_final_snapshot')
  }

  get snapshot_identifier() {
    return this._attr('snapshot_identifier')
  }

  get source_region() {
    return this._attr('source_region')
  }

  get storage_encrypted() {
    return this._attr('storage_encrypted')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_security_group_ids() {
    return this._attr('vpc_security_group_ids')
  }
}
