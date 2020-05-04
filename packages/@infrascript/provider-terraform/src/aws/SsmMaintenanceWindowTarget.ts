import {Resource} from '../Resource'

export interface SsmMaintenanceWindowTargetArguments {
  description?: string
  id?: string
  name?: string
  owner_information?: string
  resource_type: string
  window_id: string
}

export interface SsmMaintenanceWindowTargetAttributes {
  description?: string
  id: string
  name?: string
  owner_information?: string
  resource_type: string
  window_id: string
}

export class SsmMaintenanceWindowTarget extends Resource<
  SsmMaintenanceWindowTargetArguments,
  SsmMaintenanceWindowTargetAttributes
> {
  _kind = 'aws_ssm_maintenance_window_target'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get owner_information() {
    return this._attr('owner_information')
  }

  get resource_type() {
    return this._attr('resource_type')
  }

  get window_id() {
    return this._attr('window_id')
  }
}
