import {Resource} from '../Resource'

export interface TransferSshKeyArguments {
  body: string
  id?: string
  server_id: string
  user_name: string
}

export interface TransferSshKeyAttributes {
  body: string
  id: string
  server_id: string
  user_name: string
}

export class TransferSshKey extends Resource<TransferSshKeyArguments, TransferSshKeyAttributes> {
  _kind = 'aws_transfer_ssh_key'

  get body() {
    return this._attr('body')
  }

  get id() {
    return this._attr('id')
  }

  get server_id() {
    return this._attr('server_id')
  }

  get user_name() {
    return this._attr('user_name')
  }
}
