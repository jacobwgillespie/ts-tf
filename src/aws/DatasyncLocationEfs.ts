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
  kind = 'aws_datasync_location_efs'
  _outputAttrNames = ['arn', 'efs_file_system_arn', 'id', 'subdirectory', 'tags', 'uri'] as const
}
