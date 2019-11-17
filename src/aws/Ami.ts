import {Resource} from '../Resource'

export interface AmiArguments {
  architecture?: string
  description?: string
  ena_support?: boolean
  id?: string
  image_location?: string
  kernel_id?: string
  name: string
  ramdisk_id?: string
  root_device_name?: string
  sriov_net_support?: string
  tags?: {[key: string]: string}
  virtualization_type?: string
}

export interface AmiAttributes {
  architecture?: string
  description?: string
  ena_support?: boolean
  id: string
  image_location: string
  kernel_id?: string
  manage_ebs_snapshots: boolean
  name: string
  ramdisk_id?: string
  root_device_name?: string
  root_snapshot_id: string
  sriov_net_support?: string
  tags?: {[key: string]: string}
  virtualization_type?: string
}

export class Ami extends Resource<AmiArguments, AmiAttributes> {
  kind = 'aws_ami'
  _outputAttrNames = [
    'architecture',
    'description',
    'ena_support',
    'id',
    'image_location',
    'kernel_id',
    'manage_ebs_snapshots',
    'name',
    'ramdisk_id',
    'root_device_name',
    'root_snapshot_id',
    'sriov_net_support',
    'tags',
    'virtualization_type',
  ] as const
}
