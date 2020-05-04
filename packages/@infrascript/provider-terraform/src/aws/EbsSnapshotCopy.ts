import {Resource} from '../Resource'

export interface EbsSnapshotCopyArguments {
  description?: string
  encrypted?: boolean
  id?: string
  kms_key_id?: string
  source_region: string
  source_snapshot_id: string
  tags?: {[key: string]: string}
}

export interface EbsSnapshotCopyAttributes {
  data_encryption_key_id: string
  description?: string
  encrypted?: boolean
  id: string
  kms_key_id?: string
  owner_alias: string
  owner_id: string
  source_region: string
  source_snapshot_id: string
  tags?: {[key: string]: string}
  volume_id: string
  volume_size: number
}

export class EbsSnapshotCopy extends Resource<EbsSnapshotCopyArguments, EbsSnapshotCopyAttributes> {
  _kind = 'aws_ebs_snapshot_copy'

  get data_encryption_key_id() {
    return this._attr('data_encryption_key_id')
  }

  get description() {
    return this._attr('description')
  }

  get encrypted() {
    return this._attr('encrypted')
  }

  get id() {
    return this._attr('id')
  }

  get kms_key_id() {
    return this._attr('kms_key_id')
  }

  get owner_alias() {
    return this._attr('owner_alias')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get source_region() {
    return this._attr('source_region')
  }

  get source_snapshot_id() {
    return this._attr('source_snapshot_id')
  }

  get tags() {
    return this._attr('tags')
  }

  get volume_id() {
    return this._attr('volume_id')
  }

  get volume_size() {
    return this._attr('volume_size')
  }
}
