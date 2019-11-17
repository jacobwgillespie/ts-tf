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
  kind = 'aws_iam_account_alias'
  _outputAttrNames = ['account_alias', 'id'] as const
}
