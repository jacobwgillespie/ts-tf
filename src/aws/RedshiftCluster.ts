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
  kind = 'aws_redshift_cluster'
  _outputAttrNames = [
    'allow_version_upgrade',
    'arn',
    'automated_snapshot_retention_period',
    'availability_zone',
    'bucket_name',
    'cluster_identifier',
    'cluster_parameter_group_name',
    'cluster_public_key',
    'cluster_revision_number',
    'cluster_security_groups',
    'cluster_subnet_group_name',
    'cluster_type',
    'cluster_version',
    'database_name',
    'dns_name',
    'elastic_ip',
    'enable_logging',
    'encrypted',
    'endpoint',
    'enhanced_vpc_routing',
    'final_snapshot_identifier',
    'iam_roles',
    'id',
    'kms_key_id',
    'master_password',
    'master_username',
    'node_type',
    'number_of_nodes',
    'owner_account',
    'port',
    'preferred_maintenance_window',
    'publicly_accessible',
    's3_key_prefix',
    'skip_final_snapshot',
    'snapshot_cluster_identifier',
    'snapshot_identifier',
    'tags',
    'vpc_security_group_ids',
  ] as const
}
