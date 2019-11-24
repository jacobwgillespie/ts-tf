import {Resource} from '../Resource'

export interface DbSnapshotArguments {
  db_instance_identifier: string
  db_snapshot_identifier: string
  id?: string
  tags?: {[key: string]: string}
}

export interface DbSnapshotAttributes {
  allocated_storage: number
  availability_zone: string
  db_instance_identifier: string
  db_snapshot_arn: string
  db_snapshot_identifier: string
  encrypted: boolean
  engine: string
  engine_version: string
  id: string
  iops: number
  kms_key_id: string
  license_model: string
  option_group_name: string
  port: number
  snapshot_type: string
  source_db_snapshot_identifier: string
  source_region: string
  status: string
  storage_type: string
  tags?: {[key: string]: string}
  vpc_id: string
}

export class DbSnapshot extends Resource<DbSnapshotArguments, DbSnapshotAttributes> {
  _kind = 'aws_db_snapshot'

  get allocated_storage() {
    return this._attr('allocated_storage')
  }

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get db_instance_identifier() {
    return this._attr('db_instance_identifier')
  }

  get db_snapshot_arn() {
    return this._attr('db_snapshot_arn')
  }

  get db_snapshot_identifier() {
    return this._attr('db_snapshot_identifier')
  }

  get encrypted() {
    return this._attr('encrypted')
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

  get iops() {
    return this._attr('iops')
  }

  get kms_key_id() {
    return this._attr('kms_key_id')
  }

  get license_model() {
    return this._attr('license_model')
  }

  get option_group_name() {
    return this._attr('option_group_name')
  }

  get port() {
    return this._attr('port')
  }

  get snapshot_type() {
    return this._attr('snapshot_type')
  }

  get source_db_snapshot_identifier() {
    return this._attr('source_db_snapshot_identifier')
  }

  get source_region() {
    return this._attr('source_region')
  }

  get status() {
    return this._attr('status')
  }

  get storage_type() {
    return this._attr('storage_type')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
