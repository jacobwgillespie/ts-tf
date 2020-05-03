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
  _kind = 'aws_glacier_vault_lock'

  get complete_lock() {
    return this._attr('complete_lock')
  }

  get id() {
    return this._attr('id')
  }

  get ignore_deletion_error() {
    return this._attr('ignore_deletion_error')
  }

  get policy() {
    return this._attr('policy')
  }

  get vault_name() {
    return this._attr('vault_name')
  }
}
