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
  kind = 'aws_storagegateway_working_storage'
  _outputAttrNames = ['disk_id', 'gateway_arn', 'id'] as const
}
