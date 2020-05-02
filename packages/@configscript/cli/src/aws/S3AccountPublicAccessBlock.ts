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
  _kind = 'aws_s3_account_public_access_block'

  get account_id() {
    return this._attr('account_id')
  }

  get block_public_acls() {
    return this._attr('block_public_acls')
  }

  get block_public_policy() {
    return this._attr('block_public_policy')
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
