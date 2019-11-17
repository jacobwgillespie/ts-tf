import {Resource} from '../Resource'

export interface DocdbClusterArguments {
  apply_immediately?: boolean
  availability_zones?: Set<string>
  backup_retention_period?: number
  cluster_identifier?: string
  cluster_identifier_prefix?: string
  cluster_members?: Set<string>
  db_cluster_parameter_group_name?: string
  db_subnet_group_name?: string
  enabled_cloudwatch_logs_exports?: Array<string>
  engine?: string
  engine_version?: string
  final_snapshot_identifier?: string
  id?: string
  kms_key_id?: string
  master_password?: string
  master_username?: string
  port?: number
  preferred_backup_window?: string
  preferred_maintenance_window?: string
  skip_final_snapshot?: boolean
  snapshot_identifier?: string
  storage_encrypted?: boolean
  tags?: {[key: string]: string}
  vpc_security_group_ids?: Set<string>
}

export interface DocdbClusterAttributes {
  apply_immediately: boolean
  arn: string
  availability_zones: Set<string>
  backup_retention_period?: number
  cluster_identifier: string
  cluster_identifier_prefix: string
  cluster_members: Set<string>
  cluster_resource_id: string
  db_cluster_parameter_group_name: string
  db_subnet_group_name: string
  enabled_cloudwatch_logs_exports?: Array<string>
  endpoint: string
  engine?: string
  engine_version: string
  final_snapshot_identifier?: string
  hosted_zone_id: string
  id: string
  kms_key_id: string
  master_password?: string
  master_username: string
  port?: number
  preferred_backup_window: string
  preferred_maintenance_window: string
  reader_endpoint: string
  skip_final_snapshot?: boolean
  snapshot_identifier?: string
  storage_encrypted?: boolean
  tags?: {[key: string]: string}
  vpc_security_group_ids: Set<string>
}

export class DocdbCluster extends Resource<DocdbClusterArguments, DocdbClusterAttributes> {
  kind = 'aws_docdb_cluster'
  _outputAttrNames = [
    'apply_immediately',
    'arn',
    'availability_zones',
    'backup_retention_period',
    'cluster_identifier',
    'cluster_identifier_prefix',
    'cluster_members',
    'cluster_resource_id',
    'db_cluster_parameter_group_name',
    'db_subnet_group_name',
    'enabled_cloudwatch_logs_exports',
    'endpoint',
    'engine',
    'engine_version',
    'final_snapshot_identifier',
    'hosted_zone_id',
    'id',
    'kms_key_id',
    'master_password',
    'master_username',
    'port',
    'preferred_backup_window',
    'preferred_maintenance_window',
    'reader_endpoint',
    'skip_final_snapshot',
    'snapshot_identifier',
    'storage_encrypted',
    'tags',
    'vpc_security_group_ids',
  ] as const
}
