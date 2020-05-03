import {Resource} from '../Resource'

export interface NeptuneClusterInstanceArguments {
  apply_immediately?: boolean
  auto_minor_version_upgrade?: boolean
  availability_zone?: string
  cluster_identifier: string
  engine?: string
  engine_version?: string
  id?: string
  identifier?: string
  identifier_prefix?: string
  instance_class: string
  neptune_parameter_group_name?: string
  neptune_subnet_group_name?: string
  port?: number
  preferred_backup_window?: string
  preferred_maintenance_window?: string
  promotion_tier?: number
  publicly_accessible?: boolean
  tags?: {[key: string]: string}
}

export interface NeptuneClusterInstanceAttributes {
  address: string
  apply_immediately: boolean
  arn: string
  auto_minor_version_upgrade?: boolean
  availability_zone: string
  cluster_identifier: string
  dbi_resource_id: string
  endpoint: string
  engine?: string
  engine_version: string
  id: string
  identifier: string
  identifier_prefix: string
  instance_class: string
  kms_key_arn: string
  neptune_parameter_group_name?: string
  neptune_subnet_group_name: string
  port?: number
  preferred_backup_window: string
  preferred_maintenance_window: string
  promotion_tier?: number
  publicly_accessible?: boolean
  storage_encrypted: boolean
  tags?: {[key: string]: string}
  writer: boolean
}

export class NeptuneClusterInstance extends Resource<
  NeptuneClusterInstanceArguments,
  NeptuneClusterInstanceAttributes
> {
  _kind = 'aws_neptune_cluster_instance'

  get address() {
    return this._attr('address')
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

  get cluster_identifier() {
    return this._attr('cluster_identifier')
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

  get kms_key_arn() {
    return this._attr('kms_key_arn')
  }

  get neptune_parameter_group_name() {
    return this._attr('neptune_parameter_group_name')
  }

  get neptune_subnet_group_name() {
    return this._attr('neptune_subnet_group_name')
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