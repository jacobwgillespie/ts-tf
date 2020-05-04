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
  _kind = 'aws_docdb_cluster_snapshot'

  get availability_zones() {
    return this._attr('availability_zones')
  }

  get db_cluster_identifier() {
    return this._attr('db_cluster_identifier')
  }

  get db_cluster_snapshot_arn() {
    return this._attr('db_cluster_snapshot_arn')
  }

  get db_cluster_snapshot_identifier() {
    return this._attr('db_cluster_snapshot_identifier')
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

  get kms_key_id() {
    return this._attr('kms_key_id')
  }

  get port() {
    return this._attr('port')
  }

  get snapshot_type() {
    return this._attr('snapshot_type')
  }

  get source_db_cluster_snapshot_arn() {
    return this._attr('source_db_cluster_snapshot_arn')
  }

  get status() {
    return this._attr('status')
  }

  get storage_encrypted() {
    return this._attr('storage_encrypted')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
