import {Resource} from '../Resource'

export interface IamAccountPasswordPolicyArguments {
  allow_users_to_change_password?: boolean
  hard_expiry?: boolean
  id?: string
  max_password_age?: number
  minimum_password_length?: number
  password_reuse_prevention?: number
  require_lowercase_characters?: boolean
  require_numbers?: boolean
  require_symbols?: boolean
  require_uppercase_characters?: boolean
}

export interface IamAccountPasswordPolicyAttributes {
  allow_users_to_change_password?: boolean
  expire_passwords: boolean
  hard_expiry: boolean
  id: string
  max_password_age: number
  minimum_password_length?: number
  password_reuse_prevention: number
  require_lowercase_characters: boolean
  require_numbers: boolean
  require_symbols: boolean
  require_uppercase_characters: boolean
}

export class IamAccountPasswordPolicy extends Resource<
  IamAccountPasswordPolicyArguments,
  IamAccountPasswordPolicyAttributes
> {
  kind = 'aws_iam_account_password_policy'
  _outputAttrNames = [
    'allow_users_to_change_password',
    'expire_passwords',
    'hard_expiry',
    'id',
    'max_password_age',
    'minimum_password_length',
    'password_reuse_prevention',
    'require_lowercase_characters',
    'require_numbers',
    'require_symbols',
    'require_uppercase_characters',
  ] as const
}
