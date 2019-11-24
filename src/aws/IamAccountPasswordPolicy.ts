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
  _kind = 'aws_iam_account_password_policy'

  get allow_users_to_change_password() {
    return this._attr('allow_users_to_change_password')
  }

  get expire_passwords() {
    return this._attr('expire_passwords')
  }

  get hard_expiry() {
    return this._attr('hard_expiry')
  }

  get id() {
    return this._attr('id')
  }

  get max_password_age() {
    return this._attr('max_password_age')
  }

  get minimum_password_length() {
    return this._attr('minimum_password_length')
  }

  get password_reuse_prevention() {
    return this._attr('password_reuse_prevention')
  }

  get require_lowercase_characters() {
    return this._attr('require_lowercase_characters')
  }

  get require_numbers() {
    return this._attr('require_numbers')
  }

  get require_symbols() {
    return this._attr('require_symbols')
  }

  get require_uppercase_characters() {
    return this._attr('require_uppercase_characters')
  }
}
