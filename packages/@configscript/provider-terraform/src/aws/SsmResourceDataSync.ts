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
  _kind = 'aws_ssm_resource_data_sync'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
