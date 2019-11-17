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
  kind = 'aws_rds_cluster'
  _outputAttrNames = [
    'apply_immediately',
    'arn',
    'availability_zones',
    'backtrack_window',
    'backup_retention_period',
    'cluster_identifier',
    'cluster_identifier_prefix',
    'cluster_members',
    'cluster_resource_id',
    'copy_tags_to_snapshot',
    'database_name',
    'db_cluster_parameter_group_name',
    'db_subnet_group_name',
    'deletion_protection',
    'enabled_cloudwatch_logs_exports',
    'endpoint',
    'engine',
    'engine_mode',
    'engine_version',
    'final_snapshot_identifier',
    'global_cluster_identifier',
    'hosted_zone_id',
    'iam_database_authentication_enabled',
    'iam_roles',
    'id',
    'kms_key_id',
    'master_password',
    'master_username',
    'port',
    'preferred_backup_window',
    'preferred_maintenance_window',
    'reader_endpoint',
    'replication_source_identifier',
    'skip_final_snapshot',
    'snapshot_identifier',
    'source_region',
    'storage_encrypted',
    'tags',
    'vpc_security_group_ids',
  ] as const
}
