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
  kind = 'aws_ssm_maintenance_window_target'
  _outputAttrNames = ['description', 'id', 'name', 'owner_information', 'resource_type', 'window_id'] as const
}
