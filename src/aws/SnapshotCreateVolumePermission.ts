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
  kind = 'aws_snapshot_create_volume_permission'
  _outputAttrNames = ['account_id', 'id', 'snapshot_id'] as const
}
