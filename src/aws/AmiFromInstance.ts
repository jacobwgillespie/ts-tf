import {Resource} from '../Resource'

export interface AmiFromInstanceArguments {
  description?: string
  id?: string
  name: string
  snapshot_without_reboot?: boolean
  source_instance_id: string
  tags?: {[key: string]: string}
}

export interface AmiFromInstanceAttributes {
  architecture: string
  description?: string
  ena_support: boolean
  id: string
  image_location: string
  kernel_id: string
  manage_ebs_snapshots: boolean
  name: string
  ramdisk_id: string
  root_device_name: string
  root_snapshot_id: string
  snapshot_without_reboot?: boolean
  source_instance_id: string
  sriov_net_support: string
  tags?: {[key: string]: string}
  virtualization_type: string
}

export class AmiFromInstance extends Resource<AmiFromInstanceArguments, AmiFromInstanceAttributes> {
  kind = 'aws_ami_from_instance'
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
    'snapshot_without_reboot',
    'source_instance_id',
    'sriov_net_support',
    'tags',
    'virtualization_type',
  ] as const
}
