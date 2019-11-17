import {Resource} from '../Resource'

export interface NeptuneClusterArguments {
  apply_immediately?: boolean
  availability_zones?: Set<string>
  backup_retention_period?: number
  cluster_identifier?: string
  cluster_identifier_prefix?: string
  engine?: string
  engine_version?: string
  final_snapshot_identifier?: string
  iam_database_authentication_enabled?: boolean
  iam_roles?: Set<string>
  id?: string
  kms_key_arn?: string
  neptune_cluster_parameter_group_name?: string
  neptune_subnet_group_name?: string
  port?: number
  preferred_backup_window?: string
  preferred_maintenance_window?: string
  replication_source_identifier?: string
  skip_final_snapshot?: boolean
  snapshot_identifier?: string
  storage_encrypted?: boolean
  tags?: {[key: string]: string}
  vpc_security_group_ids?: Set<string>
}

export interface NeptuneClusterAttributes {
  apply_immediately: boolean
  arn: string
  availability_zones: Set<string>
  backup_retention_period?: number
  cluster_identifier: string
  cluster_identifier_prefix: string
  cluster_members: Set<string>
  cluster_resource_id: string
  endpoint: string
  engine?: string
  engine_version: string
  final_snapshot_identifier?: string
  hosted_zone_id: string
  iam_database_authentication_enabled?: boolean
  iam_roles?: Set<string>
  id: string
  kms_key_arn: string
  neptune_cluster_parameter_group_name?: string
  neptune_subnet_group_name: string
  port?: number
  preferred_backup_window: string
  preferred_maintenance_window: string
  reader_endpoint: string
  replication_source_identifier?: string
  skip_final_snapshot?: boolean
  snapshot_identifier?: string
  storage_encrypted?: boolean
  tags?: {[key: string]: string}
  vpc_security_group_ids: Set<string>
}

export class NeptuneCluster extends Resource<NeptuneClusterArguments, NeptuneClusterAttributes> {
  kind = 'aws_neptune_cluster'
  _outputAttrNames = [
    'apply_immediately',
    'arn',
    'availability_zones',
    'backup_retention_period',
    'cluster_identifier',
    'cluster_identifier_prefix',
    'cluster_members',
    'cluster_resource_id',
    'endpoint',
    'engine',
    'engine_version',
    'final_snapshot_identifier',
    'hosted_zone_id',
    'iam_database_authentication_enabled',
    'iam_roles',
    'id',
    'kms_key_arn',
    'neptune_cluster_parameter_group_name',
    'neptune_subnet_group_name',
    'port',
    'preferred_backup_window',
    'preferred_maintenance_window',
    'reader_endpoint',
    'replication_source_identifier',
    'skip_final_snapshot',
    'snapshot_identifier',
    'storage_encrypted',
    'tags',
    'vpc_security_group_ids',
  ] as const
}
