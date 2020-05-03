import {Resource} from '../Resource'

export interface OpsworksPermissionArguments {
  allow_ssh?: boolean
  allow_sudo?: boolean
  id?: string
  level?: string
  stack_id?: string
  user_arn: string
}

export interface OpsworksPermissionAttributes {
  allow_ssh: boolean
  allow_sudo: boolean
  id: string
  level: string
  stack_id: string
  user_arn: string
}

export class OpsworksPermission extends Resource<OpsworksPermissionArguments, OpsworksPermissionAttributes> {
  _kind = 'aws_opsworks_permission'

  get allow_ssh() {
    return this._attr('allow_ssh')
  }

  get allow_sudo() {
    return this._attr('allow_sudo')
  }

  get id() {
    return this._attr('id')
  }

  get level() {
    return this._attr('level')
  }

  get stack_id() {
    return this._attr('stack_id')
  }

  get user_arn() {
    return this._attr('user_arn')
  }
}
