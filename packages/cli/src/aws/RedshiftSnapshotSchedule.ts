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
  _kind = 'aws_redshift_snapshot_schedule'

  get arn() {
    return this._attr('arn')
  }

  get definitions() {
    return this._attr('definitions')
  }

  get description() {
    return this._attr('description')
  }

  get force_destroy() {
    return this._attr('force_destroy')
  }

  get id() {
    return this._attr('id')
  }

  get identifier() {
    return this._attr('identifier')
  }

  get identifier_prefix() {
    return this._attr('identifier_prefix')
  }

  get tags() {
    return this._attr('tags')
  }
}
