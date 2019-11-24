import {Resource} from '../Resource'

export interface StoragegatewaySmbFileShareArguments {
  authentication?: string
  default_storage_class?: string
  gateway_arn: string
  guess_mime_type_enabled?: boolean
  id?: string
  invalid_user_list?: Set<string>
  kms_encrypted?: boolean
  kms_key_arn?: string
  location_arn: string
  object_acl?: string
  read_only?: boolean
  requester_pays?: boolean
  role_arn: string
  valid_user_list?: Set<string>
}

export interface StoragegatewaySmbFileShareAttributes {
  arn: string
  authentication?: string
  default_storage_class?: string
  fileshare_id: string
  gateway_arn: string
  guess_mime_type_enabled?: boolean
  id: string
  invalid_user_list?: Set<string>
  kms_encrypted?: boolean
  kms_key_arn?: string
  location_arn: string
  object_acl?: string
  read_only?: boolean
  requester_pays?: boolean
  role_arn: string
  valid_user_list?: Set<string>
}

export class StoragegatewaySmbFileShare extends Resource<
  StoragegatewaySmbFileShareArguments,
  StoragegatewaySmbFileShareAttributes
> {
  _kind = 'aws_storagegateway_smb_file_share'

  get arn() {
    return this._attr('arn')
  }

  get authentication() {
    return this._attr('authentication')
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

  get invalid_user_list() {
    return this._attr('invalid_user_list')
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

  get valid_user_list() {
    return this._attr('valid_user_list')
  }
}
