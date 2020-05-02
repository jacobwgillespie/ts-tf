import {Resource} from '../Resource'

export interface RedshiftSnapshotCopyGrantArguments {
  id?: string
  kms_key_id?: string
  snapshot_copy_grant_name: string
  tags?: {[key: string]: string}
}

export interface RedshiftSnapshotCopyGrantAttributes {
  arn: string
  id: string
  kms_key_id: string
  snapshot_copy_grant_name: string
  tags?: {[key: string]: string}
}

export class RedshiftSnapshotCopyGrant extends Resource<
  RedshiftSnapshotCopyGrantArguments,
  RedshiftSnapshotCopyGrantAttributes
> {
  _kind = 'aws_redshift_snapshot_copy_grant'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get kms_key_id() {
    return this._attr('kms_key_id')
  }

  get snapshot_copy_grant_name() {
    return this._attr('snapshot_copy_grant_name')
  }

  get tags() {
    return this._attr('tags')
  }
}
