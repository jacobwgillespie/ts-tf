import {Resource} from '../Resource'

export interface DatasyncLocationNfsArguments {
  id?: string
  server_hostname: string
  subdirectory: string
  tags?: {[key: string]: string}
}

export interface DatasyncLocationNfsAttributes {
  arn: string
  id: string
  server_hostname: string
  subdirectory: string
  tags?: {[key: string]: string}
  uri: string
}

export class DatasyncLocationNfs extends Resource<DatasyncLocationNfsArguments, DatasyncLocationNfsAttributes> {
  _kind = 'aws_datasync_location_nfs'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get server_hostname() {
    return this._attr('server_hostname')
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
