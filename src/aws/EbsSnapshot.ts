import {Resource} from '../Resource'

export interface EbsSnapshotArguments {
  description?: string
  id?: string
  tags?: {[key: string]: string}
  volume_id: string
}

export interface EbsSnapshotAttributes {
  data_encryption_key_id: string
  description?: string
  encrypted: boolean
  id: string
  kms_key_id: string
  owner_alias: string
  owner_id: string
  tags?: {[key: string]: string}
  volume_id: string
  volume_size: number
}

export class EbsSnapshot extends Resource<EbsSnapshotArguments, EbsSnapshotAttributes> {
  _kind = 'aws_ebs_snapshot'

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
