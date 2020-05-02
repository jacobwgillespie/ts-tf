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
  _kind = 'aws_ami_launch_permission'

  get account_id() {
    return this._attr('account_id')
  }

  get id() {
    return this._attr('id')
  }

  get image_id() {
    return this._attr('image_id')
  }
}
