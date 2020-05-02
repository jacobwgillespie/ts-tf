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
  _kind = 'aws_storagegateway_upload_buffer'

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
