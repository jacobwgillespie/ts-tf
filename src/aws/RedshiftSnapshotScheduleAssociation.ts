import {Resource} from '../Resource'

export interface RedshiftSnapshotScheduleAssociationArguments {
  cluster_identifier: string
  id?: string
  schedule_identifier: string
}

export interface RedshiftSnapshotScheduleAssociationAttributes {
  cluster_identifier: string
  id: string
  schedule_identifier: string
}

export class RedshiftSnapshotScheduleAssociation extends Resource<
  RedshiftSnapshotScheduleAssociationArguments,
  RedshiftSnapshotScheduleAssociationAttributes
> {
  kind = 'aws_redshift_snapshot_schedule_association'
  _outputAttrNames = ['cluster_identifier', 'id', 'schedule_identifier'] as const
}
