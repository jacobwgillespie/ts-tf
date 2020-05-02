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
  _kind = 'aws_s3_bucket_inventory'

  get bucket() {
    return this._attr('bucket')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }

  get included_object_versions() {
    return this._attr('included_object_versions')
  }

  get name() {
    return this._attr('name')
  }

  get optional_fields() {
    return this._attr('optional_fields')
  }
}
