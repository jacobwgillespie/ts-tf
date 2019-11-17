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
  kind = 'aws_iam_access_key'
  _outputAttrNames = [
    'encrypted_secret',
    'id',
    'key_fingerprint',
    'pgp_key',
    'secret',
    'ses_smtp_password',
    'status',
    'user',
  ] as const
}
