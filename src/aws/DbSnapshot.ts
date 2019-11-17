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
  kind = 'aws_db_snapshot'
  _outputAttrNames = [
    'allocated_storage',
    'availability_zone',
    'db_instance_identifier',
    'db_snapshot_arn',
    'db_snapshot_identifier',
    'encrypted',
    'engine',
    'engine_version',
    'id',
    'iops',
    'kms_key_id',
    'license_model',
    'option_group_name',
    'port',
    'snapshot_type',
    'source_db_snapshot_identifier',
    'source_region',
    'status',
    'storage_type',
    'tags',
    'vpc_id',
  ] as const
}
