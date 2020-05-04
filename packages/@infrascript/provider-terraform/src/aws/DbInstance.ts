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
  _kind = 'aws_db_instance'

  get address() {
    return this._attr('address')
  }

  get allocated_storage() {
    return this._attr('allocated_storage')
  }

  get allow_major_version_upgrade() {
    return this._attr('allow_major_version_upgrade')
  }

  get apply_immediately() {
    return this._attr('apply_immediately')
  }

  get arn() {
    return this._attr('arn')
  }

  get auto_minor_version_upgrade() {
    return this._attr('auto_minor_version_upgrade')
  }

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get backup_retention_period() {
    return this._attr('backup_retention_period')
  }

  get backup_window() {
    return this._attr('backup_window')
  }

  get ca_cert_identifier() {
    return this._attr('ca_cert_identifier')
  }

  get character_set_name() {
    return this._attr('character_set_name')
  }

  get copy_tags_to_snapshot() {
    return this._attr('copy_tags_to_snapshot')
  }

  get db_subnet_group_name() {
    return this._attr('db_subnet_group_name')
  }

  get deletion_protection() {
    return this._attr('deletion_protection')
  }

  get domain() {
    return this._attr('domain')
  }

  get domain_iam_role_name() {
    return this._attr('domain_iam_role_name')
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

  get engine_version() {
    return this._attr('engine_version')
  }

  get final_snapshot_identifier() {
    return this._attr('final_snapshot_identifier')
  }

  get hosted_zone_id() {
    return this._attr('hosted_zone_id')
  }

  get iam_database_authentication_enabled() {
    return this._attr('iam_database_authentication_enabled')
  }

  get id() {
    return this._attr('id')
  }

  get identifier() {
    return this._attr('identifier')
  }

  get identifier_prefix() {
    return this._attr('identifier_prefix')
  }

  get instance_class() {
    return this._attr('instance_class')
  }

  get iops() {
    return this._attr('iops')
  }

  get kms_key_id() {
    return this._attr('kms_key_id')
  }

  get license_model() {
    return this._attr('license_model')
  }

  get maintenance_window() {
    return this._attr('maintenance_window')
  }

  get max_allocated_storage() {
    return this._attr('max_allocated_storage')
  }

  get monitoring_interval() {
    return this._attr('monitoring_interval')
  }

  get monitoring_role_arn() {
    return this._attr('monitoring_role_arn')
  }

  get multi_az() {
    return this._attr('multi_az')
  }

  get name() {
    return this._attr('name')
  }

  get option_group_name() {
    return this._attr('option_group_name')
  }

  get parameter_group_name() {
    return this._attr('parameter_group_name')
  }

  get password() {
    return this._attr('password')
  }

  get performance_insights_enabled() {
    return this._attr('performance_insights_enabled')
  }

  get performance_insights_kms_key_id() {
    return this._attr('performance_insights_kms_key_id')
  }

  get performance_insights_retention_period() {
    return this._attr('performance_insights_retention_period')
  }

  get port() {
    return this._attr('port')
  }

  get publicly_accessible() {
    return this._attr('publicly_accessible')
  }

  get replicas() {
    return this._attr('replicas')
  }

  get replicate_source_db() {
    return this._attr('replicate_source_db')
  }

  get resource_id() {
    return this._attr('resource_id')
  }

  get security_group_names() {
    return this._attr('security_group_names')
  }

  get skip_final_snapshot() {
    return this._attr('skip_final_snapshot')
  }

  get snapshot_identifier() {
    return this._attr('snapshot_identifier')
  }

  get status() {
    return this._attr('status')
  }

  get storage_encrypted() {
    return this._attr('storage_encrypted')
  }

  get storage_type() {
    return this._attr('storage_type')
  }

  get tags() {
    return this._attr('tags')
  }

  get timezone() {
    return this._attr('timezone')
  }

  get username() {
    return this._attr('username')
  }

  get vpc_security_group_ids() {
    return this._attr('vpc_security_group_ids')
  }
}
