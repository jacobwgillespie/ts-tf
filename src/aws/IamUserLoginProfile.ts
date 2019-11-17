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
  kind = 'aws_iam_user_login_profile'
  _outputAttrNames = [
    'encrypted_password',
    'id',
    'key_fingerprint',
    'password_length',
    'password_reset_required',
    'pgp_key',
    'user',
  ] as const
}
