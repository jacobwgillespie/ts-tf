import {Resource} from '../Resource'

export interface FmsAdminAccountArguments {
  account_id?: string
  id?: string
}

export interface FmsAdminAccountAttributes {
  account_id: string
  id: string
}

export class FmsAdminAccount extends Resource<FmsAdminAccountArguments, FmsAdminAccountAttributes> {
  _kind = 'aws_fms_admin_account'

  get account_id() {
    return this._attr('account_id')
  }

  get id() {
    return this._attr('id')
  }
}
