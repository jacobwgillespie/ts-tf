import {Resource} from '../Resource'

export interface FsxWindowsFileSystemArguments {
  active_directory_id?: string
  automatic_backup_retention_days?: number
  copy_tags_to_backups?: boolean
  daily_automatic_backup_start_time?: string
  id?: string
  kms_key_id?: string
  security_group_ids?: Set<string>
  skip_final_backup?: boolean
  storage_capacity: number
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
  throughput_capacity: number
  weekly_maintenance_start_time?: string
}

export interface FsxWindowsFileSystemAttributes {
  active_directory_id?: string
  arn: string
  automatic_backup_retention_days?: number
  copy_tags_to_backups?: boolean
  daily_automatic_backup_start_time: string
  dns_name: string
  id: string
  kms_key_id: string
  network_interface_ids: Set<string>
  owner_id: string
  security_group_ids?: Set<string>
  skip_final_backup?: boolean
  storage_capacity: number
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
  throughput_capacity: number
  vpc_id: string
  weekly_maintenance_start_time: string
}

export class FsxWindowsFileSystem extends Resource<FsxWindowsFileSystemArguments, FsxWindowsFileSystemAttributes> {
  _kind = 'aws_fsx_windows_file_system'

  get active_directory_id() {
    return this._attr('active_directory_id')
  }

  get arn() {
    return this._attr('arn')
  }

  get automatic_backup_retention_days() {
    return this._attr('automatic_backup_retention_days')
  }

  get copy_tags_to_backups() {
    return this._attr('copy_tags_to_backups')
  }

  get daily_automatic_backup_start_time() {
    return this._attr('daily_automatic_backup_start_time')
  }

  get dns_name() {
    return this._attr('dns_name')
  }

  get id() {
    return this._attr('id')
  }

  get kms_key_id() {
    return this._attr('kms_key_id')
  }

  get network_interface_ids() {
    return this._attr('network_interface_ids')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get security_group_ids() {
    return this._attr('security_group_ids')
  }

  get skip_final_backup() {
    return this._attr('skip_final_backup')
  }

  get storage_capacity() {
    return this._attr('storage_capacity')
  }

  get subnet_ids() {
    return this._attr('subnet_ids')
  }

  get tags() {
    return this._attr('tags')
  }

  get throughput_capacity() {
    return this._attr('throughput_capacity')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }

  get weekly_maintenance_start_time() {
    return this._attr('weekly_maintenance_start_time')
  }
}
