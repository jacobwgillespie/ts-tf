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
  _kind = 'aws_datasync_task'

  get arn() {
    return this._attr('arn')
  }

  get cloudwatch_log_group_arn() {
    return this._attr('cloudwatch_log_group_arn')
  }

  get destination_location_arn() {
    return this._attr('destination_location_arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get source_location_arn() {
    return this._attr('source_location_arn')
  }

  get tags() {
    return this._attr('tags')
  }
}
