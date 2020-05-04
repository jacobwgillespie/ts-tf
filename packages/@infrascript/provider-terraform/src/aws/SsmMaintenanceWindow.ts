import {Resource} from '../Resource'

export interface SsmMaintenanceWindowArguments {
  allow_unassociated_targets?: boolean
  cutoff: number
  duration: number
  enabled?: boolean
  end_date?: string
  id?: string
  name: string
  schedule: string
  schedule_timezone?: string
  start_date?: string
  tags?: {[key: string]: string}
}

export interface SsmMaintenanceWindowAttributes {
  allow_unassociated_targets?: boolean
  cutoff: number
  duration: number
  enabled?: boolean
  end_date?: string
  id: string
  name: string
  schedule: string
  schedule_timezone?: string
  start_date?: string
  tags?: {[key: string]: string}
}

export class SsmMaintenanceWindow extends Resource<SsmMaintenanceWindowArguments, SsmMaintenanceWindowAttributes> {
  _kind = 'aws_ssm_maintenance_window'

  get allow_unassociated_targets() {
    return this._attr('allow_unassociated_targets')
  }

  get cutoff() {
    return this._attr('cutoff')
  }

  get duration() {
    return this._attr('duration')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get end_date() {
    return this._attr('end_date')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get schedule() {
    return this._attr('schedule')
  }

  get schedule_timezone() {
    return this._attr('schedule_timezone')
  }

  get start_date() {
    return this._attr('start_date')
  }

  get tags() {
    return this._attr('tags')
  }
}
