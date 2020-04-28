import {Resource} from '../Resource'

export interface BackupVaultArguments {
  id?: string
  kms_key_arn?: string
  name: string
  tags?: {[key: string]: string}
}

export interface BackupVaultAttributes {
  arn: string
  id: string
  kms_key_arn: string
  name: string
  recovery_points: number
  tags?: {[key: string]: string}
}

export class BackupVault extends Resource<BackupVaultArguments, BackupVaultAttributes> {
  _kind = 'aws_backup_vault'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get kms_key_arn() {
    return this._attr('kms_key_arn')
  }

  get name() {
    return this._attr('name')
  }

  get recovery_points() {
    return this._attr('recovery_points')
  }

  get tags() {
    return this._attr('tags')
  }
}
