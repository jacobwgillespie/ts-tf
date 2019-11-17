import {Resource} from '../Resource'

export interface IotRoleAliasArguments {
  alias: string
  credential_duration?: number
  id?: string
  role_arn: string
}

export interface IotRoleAliasAttributes {
  alias: string
  arn: string
  credential_duration?: number
  id: string
  role_arn: string
}

export class IotRoleAlias extends Resource<IotRoleAliasArguments, IotRoleAliasAttributes> {
  kind = 'aws_iot_role_alias'
  _outputAttrNames = ['alias', 'arn', 'credential_duration', 'id', 'role_arn'] as const
}
