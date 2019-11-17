import {Resource} from '../Resource'

export interface DocdbClusterInstanceArguments {
  apply_immediately?: boolean
  auto_minor_version_upgrade?: boolean
  availability_zone?: string
  cluster_identifier: string
  engine?: string
  id?: string
  identifier?: string
  identifier_prefix?: string
  instance_class: string
  preferred_maintenance_window?: string
  promotion_tier?: number
  tags?: {[key: string]: string}
}

export interface DocdbClusterInstanceAttributes {
  apply_immediately: boolean
  arn: string
  auto_minor_version_upgrade?: boolean
  availability_zone: string
  cluster_identifier: string
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
  port: number
  preferred_backup_window: string
  preferred_maintenance_window: string
  promotion_tier?: number
  publicly_accessible: boolean
  storage_encrypted: boolean
  tags?: {[key: string]: string}
  writer: boolean
}

export class DocdbClusterInstance extends Resource<DocdbClusterInstanceArguments, DocdbClusterInstanceAttributes> {
  kind = 'aws_docdb_cluster_instance'
  _outputAttrNames = [
    'apply_immediately',
    'arn',
    'auto_minor_version_upgrade',
    'availability_zone',
    'cluster_identifier',
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
