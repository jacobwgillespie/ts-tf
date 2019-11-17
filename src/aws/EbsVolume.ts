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
  kind = 'aws_ebs_volume'
  _outputAttrNames = [
    'arn',
    'availability_zone',
    'encrypted',
    'id',
    'iops',
    'kms_key_id',
    'size',
    'snapshot_id',
    'tags',
    'type',
  ] as const
}
