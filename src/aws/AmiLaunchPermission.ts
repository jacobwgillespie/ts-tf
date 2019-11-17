import {Resource} from '../Resource'

export interface AmiLaunchPermissionArguments {
  account_id: string
  id?: string
  image_id: string
}

export interface AmiLaunchPermissionAttributes {
  account_id: string
  id: string
  image_id: string
}

export class AmiLaunchPermission extends Resource<AmiLaunchPermissionArguments, AmiLaunchPermissionAttributes> {
  kind = 'aws_ami_launch_permission'
  _outputAttrNames = ['account_id', 'id', 'image_id'] as const
}
