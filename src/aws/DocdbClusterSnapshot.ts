import {Resource} from '../Resource'

export interface DocdbClusterSnapshotArguments {
  db_cluster_identifier: string
  db_cluster_snapshot_identifier: string
  id?: string
}

export interface DocdbClusterSnapshotAttributes {
  availability_zones: Array<string>
  db_cluster_identifier: string
  db_cluster_snapshot_arn: string
  db_cluster_snapshot_identifier: string
  engine: string
  engine_version: string
  id: string
  kms_key_id: string
  port: number
  snapshot_type: string
  source_db_cluster_snapshot_arn: string
  status: string
  storage_encrypted: boolean
  vpc_id: string
}

export class DocdbClusterSnapshot extends Resource<DocdbClusterSnapshotArguments, DocdbClusterSnapshotAttributes> {
  kind = 'aws_docdb_cluster_snapshot'
  _outputAttrNames = [
    'availability_zones',
    'db_cluster_identifier',
    'db_cluster_snapshot_arn',
    'db_cluster_snapshot_identifier',
    'engine',
    'engine_version',
    'id',
    'kms_key_id',
    'port',
    'snapshot_type',
    'source_db_cluster_snapshot_arn',
    'status',
    'storage_encrypted',
    'vpc_id',
  ] as const
}
