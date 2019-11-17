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
  kind = 'aws_backup_vault'
  _outputAttrNames = ['arn', 'id', 'kms_key_arn', 'name', 'recovery_points', 'tags'] as const
}
