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
  kind = 'aws_transfer_ssh_key'
  _outputAttrNames = ['body', 'id', 'server_id', 'user_name'] as const
}
