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
  _kind = 'aws_iot_role_alias'

  get alias() {
    return this._attr('alias')
  }

  get arn() {
    return this._attr('arn')
  }

  get credential_duration() {
    return this._attr('credential_duration')
  }

  get id() {
    return this._attr('id')
  }

  get role_arn() {
    return this._attr('role_arn')
  }
}
