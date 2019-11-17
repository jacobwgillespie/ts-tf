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
  kind = 'aws_transfer_user'
  _outputAttrNames = ['arn', 'home_directory', 'id', 'policy', 'role', 'server_id', 'tags', 'user_name'] as const
}
