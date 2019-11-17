import {Resource} from '../Resource'

export interface SsmResourceDataSyncArguments {
  id?: string
  name: string
}

export interface SsmResourceDataSyncAttributes {
  id: string
  name: string
}

export class SsmResourceDataSync extends Resource<SsmResourceDataSyncArguments, SsmResourceDataSyncAttributes> {
  kind = 'aws_ssm_resource_data_sync'
  _outputAttrNames = ['id', 'name'] as const
}
