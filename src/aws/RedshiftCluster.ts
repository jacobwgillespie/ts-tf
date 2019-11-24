import {Resource} from '../Resource'

export interface RedshiftClusterArguments {
  allow_version_upgrade?: boolean
  automated_snapshot_retention_period?: number
  availability_zone?: string
  bucket_name?: string
  cluster_identifier: string
  cluster_parameter_group_name?: string
  cluster_public_key?: string
  cluster_revision_number?: string
  cluster_security_groups?: Set<string>
  cluster_subnet_group_name?: string
  cluster_type?: string
  cluster_version?: string
  database_name?: string
  elastic_ip?: string
  enable_logging?: boolean
  encrypted?: boolean
  endpoint?: string
  enhanced_vpc_routing?: boolean
  final_snapshot_identifier?: string
  iam_roles?: Set<string>
  id?: string
  kms_key_id?: string
  master_password?: string
  master_username?: string
  node_type: string
  number_of_nodes?: number
  owner_account?: string
  port?: number
  preferred_maintenance_window?: string
  publicly_accessible?: boolean
  s3_key_prefix?: string
  skip_final_snapshot?: boolean
  snapshot_cluster_identifier?: string
  snapshot_identifier?: string
  tags?: {[key: string]: string}
  vpc_security_group_ids?: Set<string>
}

export interface RedshiftClusterAttributes {
  allow_version_upgrade?: boolean
  arn: string
  automated_snapshot_retention_period?: number
  availability_zone: string
  bucket_name: string
  cluster_identifier: string
  cluster_parameter_group_name: string
  cluster_public_key: string
  cluster_revision_number: string
  cluster_security_groups: Set<string>
  cluster_subnet_group_name: string
  cluster_type: string
  cluster_version?: string
  database_name: string
  dns_name: string
  elastic_ip?: string
  enable_logging: boolean
  encrypted?: boolean
  endpoint: string
  enhanced_vpc_routing: boolean
  final_snapshot_identifier?: string
  iam_roles: Set<string>
  id: string
  kms_key_id: string
  master_password?: string
  master_username?: string
  node_type: string
  number_of_nodes?: number
  owner_account?: string
  port?: number
  preferred_maintenance_window: string
  publicly_accessible?: boolean
  s3_key_prefix: string
  skip_final_snapshot?: boolean
  snapshot_cluster_identifier?: string
  snapshot_identifier?: string
  tags?: {[key: string]: string}
  vpc_security_group_ids: Set<string>
}

export class RedshiftCluster extends Resource<RedshiftClusterArguments, RedshiftClusterAttributes> {
  _kind = 'aws_redshift_cluster'

  get allow_version_upgrade() {
    return this._attr('allow_version_upgrade')
  }

  get arn() {
    return this._attr('arn')
  }

  get automated_snapshot_retention_period() {
    return this._attr('automated_snapshot_retention_period')
  }

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get bucket_name() {
    return this._attr('bucket_name')
  }

  get cluster_identifier() {
    return this._attr('cluster_identifier')
  }

  get cluster_parameter_group_name() {
    return this._attr('cluster_parameter_group_name')
  }

  get cluster_public_key() {
    return this._attr('cluster_public_key')
  }

  get cluster_revision_number() {
    return this._attr('cluster_revision_number')
  }

  get cluster_security_groups() {
    return this._attr('cluster_security_groups')
  }

  get cluster_subnet_group_name() {
    return this._attr('cluster_subnet_group_name')
  }

  get cluster_type() {
    return this._attr('cluster_type')
  }

  get cluster_version() {
    return this._attr('cluster_version')
  }

  get database_name() {
    return this._attr('database_name')
  }

  get dns_name() {
    return this._attr('dns_name')
  }

  get elastic_ip() {
    return this._attr('elastic_ip')
  }

  get enable_logging() {
    return this._attr('enable_logging')
  }

  get encrypted() {
    return this._attr('encrypted')
  }

  get endpoint() {
    return this._attr('endpoint')
  }

  get enhanced_vpc_routing() {
    return this._attr('enhanced_vpc_routing')
  }

  get final_snapshot_identifier() {
    return this._attr('final_snapshot_identifier')
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

  get node_type() {
    return this._attr('node_type')
  }

  get number_of_nodes() {
    return this._attr('number_of_nodes')
  }

  get owner_account() {
    return this._attr('owner_account')
  }

  get port() {
    return this._attr('port')
  }

  get preferred_maintenance_window() {
    return this._attr('preferred_maintenance_window')
  }

  get publicly_accessible() {
    return this._attr('publicly_accessible')
  }

  get s3_key_prefix() {
    return this._attr('s3_key_prefix')
  }

  get skip_final_snapshot() {
    return this._attr('skip_final_snapshot')
  }

  get snapshot_cluster_identifier() {
    return this._attr('snapshot_cluster_identifier')
  }

  get snapshot_identifier() {
    return this._attr('snapshot_identifier')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_security_group_ids() {
    return this._attr('vpc_security_group_ids')
  }
}
