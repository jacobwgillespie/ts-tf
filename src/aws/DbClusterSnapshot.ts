import {Resource} from '../Resource'

export interface DbClusterSnapshotArguments {
  db_cluster_identifier: string
  db_cluster_snapshot_identifier: string
  id?: string
}

export interface DbClusterSnapshotAttributes {
  allocated_storage: number
  availability_zones: Array<string>
  db_cluster_identifier: string
  db_cluster_snapshot_arn: string
  db_cluster_snapshot_identifier: string
  engine: string
  engine_version: string
  id: string
  kms_key_id: string
  license_model: string
  port: number
  snapshot_type: string
  source_db_cluster_snapshot_arn: string
  status: string
  storage_encrypted: boolean
  vpc_id: string
}

export class DbClusterSnapshot extends Resource<DbClusterSnapshotArguments, DbClusterSnapshotAttributes> {
  kind = 'aws_db_cluster_snapshot'
  _outputAttrNames = [
    'allocated_storage',
    'availability_zones',
    'db_cluster_identifier',
    'db_cluster_snapshot_arn',
    'db_cluster_snapshot_identifier',
    'engine',
    'engine_version',
    'id',
    'kms_key_id',
    'license_model',
    'port',
    'snapshot_type',
    'source_db_cluster_snapshot_arn',
    'status',
    'storage_encrypted',
    'vpc_id',
  ] as const
}
