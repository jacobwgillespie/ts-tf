import {Resource} from '../Resource'

export interface IamAccountAliasArguments {
  account_alias: string
  id?: string
}

export interface IamAccountAliasAttributes {
  account_alias: string
  id: string
}

export class IamAccountAlias extends Resource<IamAccountAliasArguments, IamAccountAliasAttributes> {
  _kind = 'aws_iam_account_alias'

  get account_alias() {
    return this._attr('account_alias')
  }

  get id() {
    return this._attr('id')
  }
}
