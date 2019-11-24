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
  _kind = 'aws_dms_replication_instance'

  get allocated_storage() {
    return this._attr('allocated_storage')
  }

  get apply_immediately() {
    return this._attr('apply_immediately')
  }

  get auto_minor_version_upgrade() {
    return this._attr('auto_minor_version_upgrade')
  }

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get engine_version() {
    return this._attr('engine_version')
  }

  get id() {
    return this._attr('id')
  }

  get kms_key_arn() {
    return this._attr('kms_key_arn')
  }

  get multi_az() {
    return this._attr('multi_az')
  }

  get preferred_maintenance_window() {
    return this._attr('preferred_maintenance_window')
  }

  get publicly_accessible() {
    return this._attr('publicly_accessible')
  }

  get replication_instance_arn() {
    return this._attr('replication_instance_arn')
  }

  get replication_instance_class() {
    return this._attr('replication_instance_class')
  }

  get replication_instance_id() {
    return this._attr('replication_instance_id')
  }

  get replication_instance_private_ips() {
    return this._attr('replication_instance_private_ips')
  }

  get replication_instance_public_ips() {
    return this._attr('replication_instance_public_ips')
  }

  get replication_subnet_group_id() {
    return this._attr('replication_subnet_group_id')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_security_group_ids() {
    return this._attr('vpc_security_group_ids')
  }
}
