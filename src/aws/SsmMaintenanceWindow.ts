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
  kind = 'aws_ssm_maintenance_window'
  _outputAttrNames = [
    'allow_unassociated_targets',
    'cutoff',
    'duration',
    'enabled',
    'end_date',
    'id',
    'name',
    'schedule',
    'schedule_timezone',
    'start_date',
    'tags',
  ] as const
}
