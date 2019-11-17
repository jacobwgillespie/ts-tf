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
  kind = 'aws_datasync_location_nfs'
  _outputAttrNames = ['arn', 'id', 'server_hostname', 'subdirectory', 'tags', 'uri'] as const
}
