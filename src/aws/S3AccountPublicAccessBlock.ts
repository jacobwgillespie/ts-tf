import {Resource} from '../Resource'

export interface S3AccountPublicAccessBlockArguments {
  account_id?: string
  block_public_acls?: boolean
  block_public_policy?: boolean
  id?: string
  ignore_public_acls?: boolean
  restrict_public_buckets?: boolean
}

export interface S3AccountPublicAccessBlockAttributes {
  account_id: string
  block_public_acls?: boolean
  block_public_policy?: boolean
  id: string
  ignore_public_acls?: boolean
  restrict_public_buckets?: boolean
}

export class S3AccountPublicAccessBlock extends Resource<
  S3AccountPublicAccessBlockArguments,
  S3AccountPublicAccessBlockAttributes
> {
  kind = 'aws_s3_account_public_access_block'
  _outputAttrNames = [
    'account_id',
    'block_public_acls',
    'block_public_policy',
    'id',
    'ignore_public_acls',
    'restrict_public_buckets',
  ] as const
}
