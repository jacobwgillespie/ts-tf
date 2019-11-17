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
  kind = 'aws_fsx_windows_file_system'
  _outputAttrNames = [
    'active_directory_id',
    'arn',
    'automatic_backup_retention_days',
    'copy_tags_to_backups',
    'daily_automatic_backup_start_time',
    'dns_name',
    'id',
    'kms_key_id',
    'network_interface_ids',
    'owner_id',
    'security_group_ids',
    'skip_final_backup',
    'storage_capacity',
    'subnet_ids',
    'tags',
    'throughput_capacity',
    'vpc_id',
    'weekly_maintenance_start_time',
  ] as const
}
