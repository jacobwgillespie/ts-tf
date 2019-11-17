import {Resource} from '../Resource'

export interface GlacierVaultLockArguments {
  complete_lock: boolean
  id?: string
  ignore_deletion_error?: boolean
  policy: string
  vault_name: string
}

export interface GlacierVaultLockAttributes {
  complete_lock: boolean
  id: string
  ignore_deletion_error?: boolean
  policy: string
  vault_name: string
}

export class GlacierVaultLock extends Resource<GlacierVaultLockArguments, GlacierVaultLockAttributes> {
  kind = 'aws_glacier_vault_lock'
  _outputAttrNames = ['complete_lock', 'id', 'ignore_deletion_error', 'policy', 'vault_name'] as const
}
