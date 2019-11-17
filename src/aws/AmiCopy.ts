import {Resource} from '../Resource'

export interface AmiCopyArguments {
  description?: string
  encrypted?: boolean
  id?: string
  kms_key_id?: string
  name: string
  source_ami_id: string
  source_ami_region: string
  tags?: {[key: string]: string}
}

export interface AmiCopyAttributes {
  architecture: string
  description?: string
  ena_support: boolean
  encrypted?: boolean
  id: string
  image_location: string
  kernel_id: string
  kms_key_id: string
  manage_ebs_snapshots: boolean
  name: string
  ramdisk_id: string
  root_device_name: string
  root_snapshot_id: string
  source_ami_id: string
  source_ami_region: string
  sriov_net_support: string
  tags?: {[key: string]: string}
  virtualization_type: string
}

export class AmiCopy extends Resource<AmiCopyArguments, AmiCopyAttributes> {
  kind = 'aws_ami_copy'
  _outputAttrNames = [
    'architecture',
    'description',
    'ena_support',
    'encrypted',
    'id',
    'image_location',
    'kernel_id',
    'kms_key_id',
    'manage_ebs_snapshots',
    'name',
    'ramdisk_id',
    'root_device_name',
    'root_snapshot_id',
    'source_ami_id',
    'source_ami_region',
    'sriov_net_support',
    'tags',
    'virtualization_type',
  ] as const
}
