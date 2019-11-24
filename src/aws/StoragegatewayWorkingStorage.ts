import {Resource} from '../Resource'

export interface StoragegatewayWorkingStorageArguments {
  disk_id: string
  gateway_arn: string
  id?: string
}

export interface StoragegatewayWorkingStorageAttributes {
  disk_id: string
  gateway_arn: string
  id: string
}

export class StoragegatewayWorkingStorage extends Resource<
  StoragegatewayWorkingStorageArguments,
  StoragegatewayWorkingStorageAttributes
> {
  _kind = 'aws_storagegateway_working_storage'

  get disk_id() {
    return this._attr('disk_id')
  }

  get gateway_arn() {
    return this._attr('gateway_arn')
  }

  get id() {
    return this._attr('id')
  }
}
