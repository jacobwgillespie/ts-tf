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
  _kind = 'aws_redshift_snapshot_schedule_association'

  get cluster_identifier() {
    return this._attr('cluster_identifier')
  }

  get id() {
    return this._attr('id')
  }

  get schedule_identifier() {
    return this._attr('schedule_identifier')
  }
}
