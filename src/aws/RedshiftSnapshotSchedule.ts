import {Resource} from '../Resource'

export interface RedshiftSnapshotScheduleArguments {
  definitions: Set<string>
  description?: string
  force_destroy?: boolean
  id?: string
  identifier?: string
  identifier_prefix?: string
  tags?: {[key: string]: string}
}

export interface RedshiftSnapshotScheduleAttributes {
  arn: string
  definitions: Set<string>
  description?: string
  force_destroy?: boolean
  id: string
  identifier: string
  identifier_prefix: string
  tags?: {[key: string]: string}
}

export class RedshiftSnapshotSchedule extends Resource<
  RedshiftSnapshotScheduleArguments,
  RedshiftSnapshotScheduleAttributes
> {
  kind = 'aws_redshift_snapshot_schedule'
  _outputAttrNames = [
    'arn',
    'definitions',
    'description',
    'force_destroy',
    'id',
    'identifier',
    'identifier_prefix',
    'tags',
  ] as const
}
