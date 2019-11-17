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
  kind = 'aws_s3_bucket_public_access_block'
  _outputAttrNames = [
    'block_public_acls',
    'block_public_policy',
    'bucket',
    'id',
    'ignore_public_acls',
    'restrict_public_buckets',
  ] as const
}
