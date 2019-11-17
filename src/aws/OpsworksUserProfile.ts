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
  kind = 'aws_opsworks_user_profile'
  _outputAttrNames = ['allow_self_management', 'id', 'ssh_public_key', 'ssh_username', 'user_arn'] as const
}
