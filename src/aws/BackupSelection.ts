import {Resource} from '../Resource'

export interface BackupSelectionArguments {
  iam_role_arn: string
  id?: string
  name: string
  plan_id: string
  resources?: Set<string>
}

export interface BackupSelectionAttributes {
  iam_role_arn: string
  id: string
  name: string
  plan_id: string
  resources?: Set<string>
}

export class BackupSelection extends Resource<BackupSelectionArguments, BackupSelectionAttributes> {
  kind = 'aws_backup_selection'
  _outputAttrNames = ['iam_role_arn', 'id', 'name', 'plan_id', 'resources'] as const
}
