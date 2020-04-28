import {Resource} from '../Resource'

export interface DatasyncLocationEfsArguments {
  efs_file_system_arn: string
  id?: string
  subdirectory?: string
  tags?: {[key: string]: string}
}

export interface DatasyncLocationEfsAttributes {
  arn: string
  efs_file_system_arn: string
  id: string
  subdirectory?: string
  tags?: {[key: string]: string}
  uri: string
}

export class DatasyncLocationEfs extends Resource<DatasyncLocationEfsArguments, DatasyncLocationEfsAttributes> {
  _kind = 'aws_datasync_location_efs'

  get arn() {
    return this._attr('arn')
  }

  get efs_file_system_arn() {
    return this._attr('efs_file_system_arn')
  }

  get id() {
    return this._attr('id')
  }

  get subdirectory() {
    return this._attr('subdirectory')
  }

  get tags() {
    return this._attr('tags')
  }

  get uri() {
    return this._attr('uri')
  }
}
