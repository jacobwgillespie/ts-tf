import {Resource} from '../Resource'

export interface S3BucketInventoryArguments {
  bucket: string
  enabled?: boolean
  id?: string
  included_object_versions: string
  name: string
  optional_fields?: Set<string>
}

export interface S3BucketInventoryAttributes {
  bucket: string
  enabled?: boolean
  id: string
  included_object_versions: string
  name: string
  optional_fields?: Set<string>
}

export class S3BucketInventory extends Resource<S3BucketInventoryArguments, S3BucketInventoryAttributes> {
  kind = 'aws_s3_bucket_inventory'
  _outputAttrNames = ['bucket', 'enabled', 'id', 'included_object_versions', 'name', 'optional_fields'] as const
}
