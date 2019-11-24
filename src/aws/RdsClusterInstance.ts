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
  _kind = 'aws_rds_cluster_instance'

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

  get cluster_identifier() {
    return this._attr('cluster_identifier')
  }

  get copy_tags_to_snapshot() {
    return this._attr('copy_tags_to_snapshot')
  }

  get db_parameter_group_name() {
    return this._attr('db_parameter_group_name')
  }

  get db_subnet_group_name() {
    return this._attr('db_subnet_group_name')
  }

  get dbi_resource_id() {
    return this._attr('dbi_resource_id')
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

  get kms_key_id() {
    return this._attr('kms_key_id')
  }

  get monitoring_interval() {
    return this._attr('monitoring_interval')
  }

  get monitoring_role_arn() {
    return this._attr('monitoring_role_arn')
  }

  get performance_insights_enabled() {
    return this._attr('performance_insights_enabled')
  }

  get performance_insights_kms_key_id() {
    return this._attr('performance_insights_kms_key_id')
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

  get promotion_tier() {
    return this._attr('promotion_tier')
  }

  get publicly_accessible() {
    return this._attr('publicly_accessible')
  }

  get storage_encrypted() {
    return this._attr('storage_encrypted')
  }

  get tags() {
    return this._attr('tags')
  }

  get writer() {
    return this._attr('writer')
  }
}
