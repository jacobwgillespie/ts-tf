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
  kind = 'aws_storagegateway_cache'
  _outputAttrNames = ['disk_id', 'gateway_arn', 'id'] as const
}
