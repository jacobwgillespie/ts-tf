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
  _kind = 'aws_ami_from_instance'

  get architecture() {
    return this._attr('architecture')
  }

  get description() {
    return this._attr('description')
  }

  get ena_support() {
    return this._attr('ena_support')
  }

  get id() {
    return this._attr('id')
  }

  get image_location() {
    return this._attr('image_location')
  }

  get kernel_id() {
    return this._attr('kernel_id')
  }

  get manage_ebs_snapshots() {
    return this._attr('manage_ebs_snapshots')
  }

  get name() {
    return this._attr('name')
  }

  get ramdisk_id() {
    return this._attr('ramdisk_id')
  }

  get root_device_name() {
    return this._attr('root_device_name')
  }

  get root_snapshot_id() {
    return this._attr('root_snapshot_id')
  }

  get snapshot_without_reboot() {
    return this._attr('snapshot_without_reboot')
  }

  get source_instance_id() {
    return this._attr('source_instance_id')
  }

  get sriov_net_support() {
    return this._attr('sriov_net_support')
  }

  get tags() {
    return this._attr('tags')
  }

  get virtualization_type() {
    return this._attr('virtualization_type')
  }
}
