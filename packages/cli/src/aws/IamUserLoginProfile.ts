import {Resource} from '../Resource'

export interface IamUserLoginProfileArguments {
  id?: string
  password_length?: number
  password_reset_required?: boolean
  pgp_key: string
  user: string
}

export interface IamUserLoginProfileAttributes {
  encrypted_password: string
  id: string
  key_fingerprint: string
  password_length?: number
  password_reset_required?: boolean
  pgp_key: string
  user: string
}

export class IamUserLoginProfile extends Resource<IamUserLoginProfileArguments, IamUserLoginProfileAttributes> {
  _kind = 'aws_iam_user_login_profile'

  get encrypted_password() {
    return this._attr('encrypted_password')
  }

  get id() {
    return this._attr('id')
  }

  get key_fingerprint() {
    return this._attr('key_fingerprint')
  }

  get password_length() {
    return this._attr('password_length')
  }

  get password_reset_required() {
    return this._attr('password_reset_required')
  }

  get pgp_key() {
    return this._attr('pgp_key')
  }

  get user() {
    return this._attr('user')
  }
}
