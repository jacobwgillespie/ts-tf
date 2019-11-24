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
  _kind = 'aws_ssm_maintenance_window_task'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get max_concurrency() {
    return this._attr('max_concurrency')
  }

  get max_errors() {
    return this._attr('max_errors')
  }

  get name() {
    return this._attr('name')
  }

  get priority() {
    return this._attr('priority')
  }

  get service_role_arn() {
    return this._attr('service_role_arn')
  }

  get task_arn() {
    return this._attr('task_arn')
  }

  get task_type() {
    return this._attr('task_type')
  }

  get window_id() {
    return this._attr('window_id')
  }
}
