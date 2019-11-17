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
  kind = 'aws_fms_admin_account'
  _outputAttrNames = ['account_id', 'id'] as const
}
