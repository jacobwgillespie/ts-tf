import {Resource} from '../Resource'

export interface SnapshotCreateVolumePermissionArguments {
  account_id: string
  id?: string
  snapshot_id: string
}

export interface SnapshotCreateVolumePermissionAttributes {
  account_id: string
  id: string
  snapshot_id: string
}

export class SnapshotCreateVolumePermission extends Resource<
  SnapshotCreateVolumePermissionArguments,
  SnapshotCreateVolumePermissionAttributes
> {
  _kind = 'aws_snapshot_create_volume_permission'

  get account_id() {
    return this._attr('account_id')
  }

  get id() {
    return this._attr('id')
  }

  get snapshot_id() {
    return this._attr('snapshot_id')
  }
}
