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
  _kind = 'aws_backup_selection'

  get iam_role_arn() {
    return this._attr('iam_role_arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get plan_id() {
    return this._attr('plan_id')
  }

  get resources() {
    return this._attr('resources')
  }
}
