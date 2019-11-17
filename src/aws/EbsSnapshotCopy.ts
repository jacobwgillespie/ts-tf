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
  kind = 'aws_ebs_snapshot_copy'
  _outputAttrNames = [
    'data_encryption_key_id',
    'description',
    'encrypted',
    'id',
    'kms_key_id',
    'owner_alias',
    'owner_id',
    'source_region',
    'source_snapshot_id',
    'tags',
    'volume_id',
    'volume_size',
  ] as const
}
