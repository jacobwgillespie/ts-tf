import {Resource} from '../Resource'

export interface DatasyncTaskArguments {
  cloudwatch_log_group_arn?: string
  destination_location_arn: string
  id?: string
  name?: string
  source_location_arn: string
  tags?: {[key: string]: string}
}

export interface DatasyncTaskAttributes {
  arn: string
  cloudwatch_log_group_arn?: string
  destination_location_arn: string
  id: string
  name?: string
  source_location_arn: string
  tags?: {[key: string]: string}
}

export class DatasyncTask extends Resource<DatasyncTaskArguments, DatasyncTaskAttributes> {
  kind = 'aws_datasync_task'
  _outputAttrNames = [
    'arn',
    'cloudwatch_log_group_arn',
    'destination_location_arn',
    'id',
    'name',
    'source_location_arn',
    'tags',
  ] as const
}
