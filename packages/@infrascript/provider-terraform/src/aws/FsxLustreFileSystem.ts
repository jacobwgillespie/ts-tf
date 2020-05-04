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
  _kind = 'aws_fsx_lustre_file_system'

  get arn() {
    return this._attr('arn')
  }

  get dns_name() {
    return this._attr('dns_name')
  }

  get export_path() {
    return this._attr('export_path')
  }

  get id() {
    return this._attr('id')
  }

  get import_path() {
    return this._attr('import_path')
  }

  get imported_file_chunk_size() {
    return this._attr('imported_file_chunk_size')
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

  get storage_capacity() {
    return this._attr('storage_capacity')
  }

  get subnet_ids() {
    return this._attr('subnet_ids')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }

  get weekly_maintenance_start_time() {
    return this._attr('weekly_maintenance_start_time')
  }
}
