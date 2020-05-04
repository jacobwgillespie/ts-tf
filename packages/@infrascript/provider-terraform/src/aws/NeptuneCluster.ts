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
  _kind = 'aws_neptune_cluster'

  get apply_immediately() {
    return this._attr('apply_immediately')
  }

  get arn() {
    return this._attr('arn')
  }

  get availability_zones() {
    return this._attr('availability_zones')
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

  get iam_roles() {
    return this._attr('iam_roles')
  }

  get id() {
    return this._attr('id')
  }

  get kms_key_arn() {
    return this._attr('kms_key_arn')
  }

  get neptune_cluster_parameter_group_name() {
    return this._attr('neptune_cluster_parameter_group_name')
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
