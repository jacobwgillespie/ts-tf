import {Resource} from '../Resource'

export interface EfsFileSystemArguments {
  creation_token?: string
  encrypted?: boolean
  id?: string
  kms_key_id?: string
  performance_mode?: string
  provisioned_throughput_in_mibps?: number
  reference_name?: string
  tags?: {[key: string]: string}
  throughput_mode?: string
}

export interface EfsFileSystemAttributes {
  arn: string
  creation_token: string
  dns_name: string
  encrypted: boolean
  id: string
  kms_key_id: string
  performance_mode: string
  provisioned_throughput_in_mibps?: number
  reference_name: string
  tags?: {[key: string]: string}
  throughput_mode?: string
}

export class EfsFileSystem extends Resource<EfsFileSystemArguments, EfsFileSystemAttributes> {
  _kind = 'aws_efs_file_system'

  get arn() {
    return this._attr('arn')
  }

  get creation_token() {
    return this._attr('creation_token')
  }

  get dns_name() {
    return this._attr('dns_name')
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

  get performance_mode() {
    return this._attr('performance_mode')
  }

  get provisioned_throughput_in_mibps() {
    return this._attr('provisioned_throughput_in_mibps')
  }

  get reference_name() {
    return this._attr('reference_name')
  }

  get tags() {
    return this._attr('tags')
  }

  get throughput_mode() {
    return this._attr('throughput_mode')
  }
}
