import {Resource} from '../Resource'

export interface EbsVolumeArguments {
  availability_zone: string
  encrypted?: boolean
  id?: string
  iops?: number
  kms_key_id?: string
  size?: number
  snapshot_id?: string
  tags?: {[key: string]: string}
  type?: string
}

export interface EbsVolumeAttributes {
  arn: string
  availability_zone: string
  encrypted: boolean
  id: string
  iops: number
  kms_key_id: string
  size: number
  snapshot_id: string
  tags?: {[key: string]: string}
  type: string
}

export class EbsVolume extends Resource<EbsVolumeArguments, EbsVolumeAttributes> {
  _kind = 'aws_ebs_volume'

  get arn() {
    return this._attr('arn')
  }

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get encrypted() {
    return this._attr('encrypted')
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

  get size() {
    return this._attr('size')
  }

  get snapshot_id() {
    return this._attr('snapshot_id')
  }

  get tags() {
    return this._attr('tags')
  }

  get type() {
    return this._attr('type')
  }
}
