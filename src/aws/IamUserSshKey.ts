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
  kind = 'aws_iam_user_ssh_key'
  _outputAttrNames = ['encoding', 'fingerprint', 'id', 'public_key', 'ssh_public_key_id', 'status', 'username'] as const
}
