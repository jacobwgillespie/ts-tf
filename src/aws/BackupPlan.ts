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
  kind = 'aws_backup_plan'
  _outputAttrNames = ['arn', 'id', 'name', 'tags', 'version'] as const
}
