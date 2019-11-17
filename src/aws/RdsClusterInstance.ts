import {Resource} from '../Resource'

export interface RdsClusterInstanceArguments {
  apply_immediately?: boolean
  auto_minor_version_upgrade?: boolean
  availability_zone?: string
  cluster_identifier: string
  copy_tags_to_snapshot?: boolean
  db_parameter_group_name?: string
  db_subnet_group_name?: string
  engine?: string
  engine_version?: string
  id?: string
  identifier?: string
  identifier_prefix?: string
  instance_class: string
  monitoring_interval?: number
  monitoring_role_arn?: string
  performance_insights_enabled?: boolean
  performance_insights_kms_key_id?: string
  preferred_backup_window?: string
  preferred_maintenance_window?: string
  promotion_tier?: number
  publicly_accessible?: boolean
  tags?: {[key: string]: string}
}

export interface RdsClusterInstanceAttributes {
  apply_immediately: boolean
  arn: string
  auto_minor_version_upgrade?: boolean
  availability_zone: string
  cluster_identifier: string
  copy_tags_to_snapshot?: boolean
  db_parameter_group_name: string
  db_subnet_group_name: string
  dbi_resource_id: string
  endpoint: string
  engine?: string
  engine_version: string
  id: string
  identifier: string
  identifier_prefix: string
  instance_class: string
  kms_key_id: string
  monitoring_interval?: number
  monitoring_role_arn: string
  performance_insights_enabled: boolean
  performance_insights_kms_key_id: string
  port: number
  preferred_backup_window: string
  preferred_maintenance_window: string
  promotion_tier?: number
  publicly_accessible?: boolean
  storage_encrypted: boolean
  tags?: {[key: string]: string}
  writer: boolean
}

export class RdsClusterInstance extends Resource<RdsClusterInstanceArguments, RdsClusterInstanceAttributes> {
  kind = 'aws_rds_cluster_instance'
  _outputAttrNames = [
    'apply_immediately',
    'arn',
    'auto_minor_version_upgrade',
    'availability_zone',
    'cluster_identifier',
    'copy_tags_to_snapshot',
    'db_parameter_group_name',
    'db_subnet_group_name',
    'dbi_resource_id',
    'endpoint',
    'engine',
    'engine_version',
    'id',
    'identifier',
    'identifier_prefix',
    'instance_class',
    'kms_key_id',
    'monitoring_interval',
    'monitoring_role_arn',
    'performance_insights_enabled',
    'performance_insights_kms_key_id',
    'port',
    'preferred_backup_window',
    'preferred_maintenance_window',
    'promotion_tier',
    'publicly_accessible',
    'storage_encrypted',
    'tags',
    'writer',
  ] as const
}
