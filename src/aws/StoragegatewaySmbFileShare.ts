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
  kind = 'aws_storagegateway_smb_file_share'
  _outputAttrNames = [
    'arn',
    'authentication',
    'default_storage_class',
    'fileshare_id',
    'gateway_arn',
    'guess_mime_type_enabled',
    'id',
    'invalid_user_list',
    'kms_encrypted',
    'kms_key_arn',
    'location_arn',
    'object_acl',
    'read_only',
    'requester_pays',
    'role_arn',
    'valid_user_list',
  ] as const
}
