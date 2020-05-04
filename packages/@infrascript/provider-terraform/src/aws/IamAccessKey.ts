import {Resource} from '../Resource'

export interface IamAccessKeyArguments {
  id?: string
  pgp_key?: string
  status?: string
  user: string
}

export interface IamAccessKeyAttributes {
  encrypted_secret: string
  id: string
  key_fingerprint: string
  pgp_key?: string
  secret: string
  ses_smtp_password: string
  status: string
  user: string
}

export class IamAccessKey extends Resource<IamAccessKeyArguments, IamAccessKeyAttributes> {
  _kind = 'aws_iam_access_key'

  get encrypted_secret() {
    return this._attr('encrypted_secret')
  }

  get id() {
    return this._attr('id')
  }

  get key_fingerprint() {
    return this._attr('key_fingerprint')
  }

  get pgp_key() {
    return this._attr('pgp_key')
  }

  get secret() {
    return this._attr('secret')
  }

  get ses_smtp_password() {
    return this._attr('ses_smtp_password')
  }

  get status() {
    return this._attr('status')
  }

  get user() {
    return this._attr('user')
  }
}
