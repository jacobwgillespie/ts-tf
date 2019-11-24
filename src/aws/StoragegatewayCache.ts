import {Resource} from '../Resource'

export interface StoragegatewayCacheArguments {
  disk_id: string
  gateway_arn: string
  id?: string
}

export interface StoragegatewayCacheAttributes {
  disk_id: string
  gateway_arn: string
  id: string
}

export class StoragegatewayCache extends Resource<StoragegatewayCacheArguments, StoragegatewayCacheAttributes> {
  _kind = 'aws_storagegateway_cache'

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
