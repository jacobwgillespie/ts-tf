import {Resource} from '../Resource'

export interface BackupPlanArguments {
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface BackupPlanAttributes {
  arn: string
  id: string
  name: string
  tags?: {[key: string]: string}
  version: string
}

export class BackupPlan extends Resource<BackupPlanArguments, BackupPlanAttributes> {
  _kind = 'aws_backup_plan'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }

  get version() {
    return this._attr('version')
  }
}
