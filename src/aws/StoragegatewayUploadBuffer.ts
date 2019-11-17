import {Resource} from '../Resource'

export interface StoragegatewayUploadBufferArguments {
  disk_id: string
  gateway_arn: string
  id?: string
}

export interface StoragegatewayUploadBufferAttributes {
  disk_id: string
  gateway_arn: string
  id: string
}

export class StoragegatewayUploadBuffer extends Resource<
  StoragegatewayUploadBufferArguments,
  StoragegatewayUploadBufferAttributes
> {
  kind = 'aws_storagegateway_upload_buffer'
  _outputAttrNames = ['disk_id', 'gateway_arn', 'id'] as const
}
