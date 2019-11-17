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
  kind = 'aws_redshift_snapshot_copy_grant'
  _outputAttrNames = ['arn', 'id', 'kms_key_id', 'snapshot_copy_grant_name', 'tags'] as const
}
