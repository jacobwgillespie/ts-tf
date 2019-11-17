import {Resource} from '../Resource'

export interface DbInstanceArguments {
  allocated_storage?: number
  allow_major_version_upgrade?: boolean
  apply_immediately?: boolean
  auto_minor_version_upgrade?: boolean
  availability_zone?: string
  backup_retention_period?: number
  backup_window?: string
  character_set_name?: string
  copy_tags_to_snapshot?: boolean
  db_subnet_group_name?: string
  deletion_protection?: boolean
  domain?: string
  domain_iam_role_name?: string
  enabled_cloudwatch_logs_exports?: Array<string>
  engine?: string
  engine_version?: string
  final_snapshot_identifier?: string
  iam_database_authentication_enabled?: boolean
  id?: string
  identifier?: string
  identifier_prefix?: string
  instance_class: string
  iops?: number
  kms_key_id?: string
  license_model?: string
  maintenance_window?: string
  max_allocated_storage?: number
  monitoring_interval?: number
  monitoring_role_arn?: string
  multi_az?: boolean
  name?: string
  option_group_name?: string
  parameter_group_name?: string
  password?: string
  performance_insights_enabled?: boolean
  performance_insights_kms_key_id?: string
  performance_insights_retention_period?: number
  port?: number
  publicly_accessible?: boolean
  replicate_source_db?: string
  security_group_names?: Set<string>
  skip_final_snapshot?: boolean
  snapshot_identifier?: string
  storage_encrypted?: boolean
  storage_type?: string
  tags?: {[key: string]: string}
  timezone?: string
  username?: string
  vpc_security_group_ids?: Set<string>
}

export interface DbInstanceAttributes {
  address: string
  allocated_storage: number
  allow_major_version_upgrade?: boolean
  apply_immediately: boolean
  arn: string
  auto_minor_version_upgrade?: boolean
  availability_zone: string
  backup_retention_period: number
  backup_window: string
  ca_cert_identifier: string
  character_set_name: string
  copy_tags_to_snapshot?: boolean
  db_subnet_group_name: string
  deletion_protection?: boolean
  domain?: string
  domain_iam_role_name?: string
  enabled_cloudwatch_logs_exports?: Array<string>
  endpoint: string
  engine: string
  engine_version: string
  final_snapshot_identifier?: string
  hosted_zone_id: string
  iam_database_authentication_enabled?: boolean
  id: string
  identifier: string
  identifier_prefix: string
  instance_class: string
  iops?: number
  kms_key_id: string
  license_model: string
  maintenance_window: string
  max_allocated_storage?: number
  monitoring_interval?: number
  monitoring_role_arn: string
  multi_az: boolean
  name: string
  option_group_name: string
  parameter_group_name: string
  password?: string
  performance_insights_enabled?: boolean
  performance_insights_kms_key_id: string
  performance_insights_retention_period: number
  port: number
  publicly_accessible?: boolean
  replicas: Array<string>
  replicate_source_db?: string
  resource_id: string
  security_group_names?: Set<string>
  skip_final_snapshot?: boolean
  snapshot_identifier?: string
  status: string
  storage_encrypted?: boolean
  storage_type: string
  tags?: {[key: string]: string}
  timezone: string
  username: string
  vpc_security_group_ids: Set<string>
}

export class DbInstance extends Resource<DbInstanceArguments, DbInstanceAttributes> {
  kind = 'aws_db_instance'
  _outputAttrNames = [
    'address',
    'allocated_storage',
    'allow_major_version_upgrade',
    'apply_immediately',
    'arn',
    'auto_minor_version_upgrade',
    'availability_zone',
    'backup_retention_period',
    'backup_window',
    'ca_cert_identifier',
    'character_set_name',
    'copy_tags_to_snapshot',
    'db_subnet_group_name',
    'deletion_protection',
    'domain',
    'domain_iam_role_name',
    'enabled_cloudwatch_logs_exports',
    'endpoint',
    'engine',
    'engine_version',
    'final_snapshot_identifier',
    'hosted_zone_id',
    'iam_database_authentication_enabled',
    'id',
    'identifier',
    'identifier_prefix',
    'instance_class',
    'iops',
    'kms_key_id',
    'license_model',
    'maintenance_window',
    'max_allocated_storage',
    'monitoring_interval',
    'monitoring_role_arn',
    'multi_az',
    'name',
    'option_group_name',
    'parameter_group_name',
    'password',
    'performance_insights_enabled',
    'performance_insights_kms_key_id',
    'performance_insights_retention_period',
    'port',
    'publicly_accessible',
    'replicas',
    'replicate_source_db',
    'resource_id',
    'security_group_names',
    'skip_final_snapshot',
    'snapshot_identifier',
    'status',
    'storage_encrypted',
    'storage_type',
    'tags',
    'timezone',
    'username',
    'vpc_security_group_ids',
  ] as const
}
