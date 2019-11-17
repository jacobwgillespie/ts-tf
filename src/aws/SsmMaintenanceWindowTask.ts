import {Resource} from '../Resource'

export interface SsmMaintenanceWindowTaskArguments {
  description?: string
  id?: string
  max_concurrency: string
  max_errors: string
  name?: string
  priority?: number
  service_role_arn: string
  task_arn: string
  task_type: string
  window_id: string
}

export interface SsmMaintenanceWindowTaskAttributes {
  description?: string
  id: string
  max_concurrency: string
  max_errors: string
  name?: string
  priority?: number
  service_role_arn: string
  task_arn: string
  task_type: string
  window_id: string
}

export class SsmMaintenanceWindowTask extends Resource<
  SsmMaintenanceWindowTaskArguments,
  SsmMaintenanceWindowTaskAttributes
> {
  kind = 'aws_ssm_maintenance_window_task'
  _outputAttrNames = [
    'description',
    'id',
    'max_concurrency',
    'max_errors',
    'name',
    'priority',
    'service_role_arn',
    'task_arn',
    'task_type',
    'window_id',
  ] as const
}
