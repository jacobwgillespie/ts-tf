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
  kind = 'aws_storagegateway_nfs_file_share'
  _outputAttrNames = [
    'arn',
    'client_list',
    'default_storage_class',
    'fileshare_id',
    'gateway_arn',
    'guess_mime_type_enabled',
    'id',
    'kms_encrypted',
    'kms_key_arn',
    'location_arn',
    'object_acl',
    'read_only',
    'requester_pays',
    'role_arn',
    'squash',
  ] as const
}
