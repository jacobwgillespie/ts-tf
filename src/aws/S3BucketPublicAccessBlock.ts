import {Resource} from '../Resource'

export interface S3BucketPublicAccessBlockArguments {
  block_public_acls?: boolean
  block_public_policy?: boolean
  bucket: string
  id?: string
  ignore_public_acls?: boolean
  restrict_public_buckets?: boolean
}

export interface S3BucketPublicAccessBlockAttributes {
  block_public_acls?: boolean
  block_public_policy?: boolean
  bucket: string
  id: string
  ignore_public_acls?: boolean
  restrict_public_buckets?: boolean
}

export class S3BucketPublicAccessBlock extends Resource<
  S3BucketPublicAccessBlockArguments,
  S3BucketPublicAccessBlockAttributes
> {
  _kind = 'aws_s3_bucket_public_access_block'

  get block_public_acls() {
    return this._attr('block_public_acls')
  }

  get block_public_policy() {
    return this._attr('block_public_policy')
  }

  get bucket() {
    return this._attr('bucket')
  }

  get id() {
    return this._attr('id')
  }

  get ignore_public_acls() {
    return this._attr('ignore_public_acls')
  }

  get restrict_public_buckets() {
    return this._attr('restrict_public_buckets')
  }
}
