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
  _kind = 'aws_ami_copy'

  get architecture() {
    return this._attr('architecture')
  }

  get description() {
    return this._attr('description')
  }

  get ena_support() {
    return this._attr('ena_support')
  }

  get encrypted() {
    return this._attr('encrypted')
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

  get kms_key_id() {
    return this._attr('kms_key_id')
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

  get source_ami_id() {
    return this._attr('source_ami_id')
  }

  get source_ami_region() {
    return this._attr('source_ami_region')
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
