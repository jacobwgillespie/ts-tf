import {Resource} from '../Resource'

export interface StoragegatewayNfsFileShareArguments {
  client_list: Set<string>
  default_storage_class?: string
  gateway_arn: string
  guess_mime_type_enabled?: boolean
  id?: string
  kms_encrypted?: boolean
  kms_key_arn?: string
  location_arn: string
  object_acl?: string
  read_only?: boolean
  requester_pays?: boolean
  role_arn: string
  squash?: string
}

export interface StoragegatewayNfsFileShareAttributes {
  arn: string
  client_list: Set<string>
  default_storage_class?: string
  fileshare_id: string
  gateway_arn: string
  guess_mime_type_enabled?: boolean
  id: string
  kms_encrypted?: boolean
  kms_key_arn?: string
  location_arn: string
  object_acl?: string
  read_only?: boolean
  requester_pays?: boolean
  role_arn: string
  squash?: string
}

export class StoragegatewayNfsFileShare extends Resource<
  StoragegatewayNfsFileShareArguments,
  StoragegatewayNfsFileShareAttributes
> {
  _kind = 'aws_storagegateway_nfs_file_share'

  get arn() {
    return this._attr('arn')
  }

  get client_list() {
    return this._attr('client_list')
  }

  get default_storage_class() {
    return this._attr('default_storage_class')
  }

  get fileshare_id() {
    return this._attr('fileshare_id')
  }

  get gateway_arn() {
    return this._attr('gateway_arn')
  }

  get guess_mime_type_enabled() {
    return this._attr('guess_mime_type_enabled')
  }

  get id() {
    return this._attr('id')
  }

  get kms_encrypted() {
    return this._attr('kms_encrypted')
  }

  get kms_key_arn() {
    return this._attr('kms_key_arn')
  }

  get location_arn() {
    return this._attr('location_arn')
  }

  get object_acl() {
    return this._attr('object_acl')
  }

  get read_only() {
    return this._attr('read_only')
  }

  get requester_pays() {
    return this._attr('requester_pays')
  }

  get role_arn() {
    return this._attr('role_arn')
  }

  get squash() {
    return this._attr('squash')
  }
}
