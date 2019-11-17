import {Resource} from '../Resource'

export interface FsxLustreFileSystemArguments {
  export_path?: string
  id?: string
  import_path?: string
  imported_file_chunk_size?: number
  security_group_ids?: Set<string>
  storage_capacity: number
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
  weekly_maintenance_start_time?: string
}

export interface FsxLustreFileSystemAttributes {
  arn: string
  dns_name: string
  export_path: string
  id: string
  import_path?: string
  imported_file_chunk_size: number
  network_interface_ids: Set<string>
  owner_id: string
  security_group_ids?: Set<string>
  storage_capacity: number
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
  vpc_id: string
  weekly_maintenance_start_time: string
}

export class FsxLustreFileSystem extends Resource<FsxLustreFileSystemArguments, FsxLustreFileSystemAttributes> {
  kind = 'aws_fsx_lustre_file_system'
  _outputAttrNames = [
    'arn',
    'dns_name',
    'export_path',
    'id',
    'import_path',
    'imported_file_chunk_size',
    'network_interface_ids',
    'owner_id',
    'security_group_ids',
    'storage_capacity',
    'subnet_ids',
    'tags',
    'vpc_id',
    'weekly_maintenance_start_time',
  ] as const
}
