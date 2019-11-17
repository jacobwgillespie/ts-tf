import {Resource} from '../Resource'

export interface DmsReplicationInstanceArguments {
  allocated_storage?: number
  apply_immediately?: boolean
  auto_minor_version_upgrade?: boolean
  availability_zone?: string
  engine_version?: string
  id?: string
  kms_key_arn?: string
  multi_az?: boolean
  preferred_maintenance_window?: string
  publicly_accessible?: boolean
  replication_instance_class: string
  replication_instance_id: string
  replication_subnet_group_id?: string
  tags?: {[key: string]: string}
  vpc_security_group_ids?: Set<string>
}

export interface DmsReplicationInstanceAttributes {
  allocated_storage: number
  apply_immediately?: boolean
  auto_minor_version_upgrade: boolean
  availability_zone: string
  engine_version: string
  id: string
  kms_key_arn: string
  multi_az: boolean
  preferred_maintenance_window: string
  publicly_accessible: boolean
  replication_instance_arn: string
  replication_instance_class: string
  replication_instance_id: string
  replication_instance_private_ips: Array<string>
  replication_instance_public_ips: Array<string>
  replication_subnet_group_id: string
  tags?: {[key: string]: string}
  vpc_security_group_ids: Set<string>
}

export class DmsReplicationInstance extends Resource<
  DmsReplicationInstanceArguments,
  DmsReplicationInstanceAttributes
> {
  kind = 'aws_dms_replication_instance'
  _outputAttrNames = [
    'allocated_storage',
    'apply_immediately',
    'auto_minor_version_upgrade',
    'availability_zone',
    'engine_version',
    'id',
    'kms_key_arn',
    'multi_az',
    'preferred_maintenance_window',
    'publicly_accessible',
    'replication_instance_arn',
    'replication_instance_class',
    'replication_instance_id',
    'replication_instance_private_ips',
    'replication_instance_public_ips',
    'replication_subnet_group_id',
    'tags',
    'vpc_security_group_ids',
  ] as const
}
