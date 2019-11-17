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
  kind = 'aws_ebs_snapshot'
  _outputAttrNames = [
    'data_encryption_key_id',
    'description',
    'encrypted',
    'id',
    'kms_key_id',
    'owner_alias',
    'owner_id',
    'tags',
    'volume_id',
    'volume_size',
  ] as const
}
