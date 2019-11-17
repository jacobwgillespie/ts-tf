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
  kind = 'aws_opsworks_permission'
  _outputAttrNames = ['allow_ssh', 'allow_sudo', 'id', 'level', 'stack_id', 'user_arn'] as const
}
