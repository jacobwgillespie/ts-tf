import {Resource} from '../Resource'

export interface OpsworksUserProfileArguments {
  allow_self_management?: boolean
  id?: string
  ssh_public_key?: string
  ssh_username: string
  user_arn: string
}

export interface OpsworksUserProfileAttributes {
  allow_self_management?: boolean
  id: string
  ssh_public_key?: string
  ssh_username: string
  user_arn: string
}

export class OpsworksUserProfile extends Resource<OpsworksUserProfileArguments, OpsworksUserProfileAttributes> {
  _kind = 'aws_opsworks_user_profile'

  get allow_self_management() {
    return this._attr('allow_self_management')
  }

  get id() {
    return this._attr('id')
  }

  get ssh_public_key() {
    return this._attr('ssh_public_key')
  }

  get ssh_username() {
    return this._attr('ssh_username')
  }

  get user_arn() {
    return this._attr('user_arn')
  }
}
