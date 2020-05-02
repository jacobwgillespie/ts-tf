import {Resource} from '../Resource'

export interface TransferUserArguments {
  home_directory?: string
  id?: string
  policy?: string
  role: string
  server_id: string
  tags?: {[key: string]: string}
  user_name: string
}

export interface TransferUserAttributes {
  arn: string
  home_directory?: string
  id: string
  policy?: string
  role: string
  server_id: string
  tags?: {[key: string]: string}
  user_name: string
}

export class TransferUser extends Resource<TransferUserArguments, TransferUserAttributes> {
  _kind = 'aws_transfer_user'

  get arn() {
    return this._attr('arn')
  }

  get home_directory() {
    return this._attr('home_directory')
  }

  get id() {
    return this._attr('id')
  }

  get policy() {
    return this._attr('policy')
  }

  get role() {
    return this._attr('role')
  }

  get server_id() {
    return this._attr('server_id')
  }

  get tags() {
    return this._attr('tags')
  }

  get user_name() {
    return this._attr('user_name')
  }
}
