import {Resource} from '../Resource'

export interface IamUserSshKeyArguments {
  encoding: string
  id?: string
  public_key: string
  status?: string
  username: string
}

export interface IamUserSshKeyAttributes {
  encoding: string
  fingerprint: string
  id: string
  public_key: string
  ssh_public_key_id: string
  status: string
  username: string
}

export class IamUserSshKey extends Resource<IamUserSshKeyArguments, IamUserSshKeyAttributes> {
  _kind = 'aws_iam_user_ssh_key'

  get encoding() {
    return this._attr('encoding')
  }

  get fingerprint() {
    return this._attr('fingerprint')
  }

  get id() {
    return this._attr('id')
  }

  get public_key() {
    return this._attr('public_key')
  }

  get ssh_public_key_id() {
    return this._attr('ssh_public_key_id')
  }

  get status() {
    return this._attr('status')
  }

  get username() {
    return this._attr('username')
  }
}
