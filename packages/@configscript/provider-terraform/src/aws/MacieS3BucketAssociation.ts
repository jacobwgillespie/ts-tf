import {Resource} from '../Resource'

export interface MacieS3BucketAssociationArguments {
  bucket_name: string
  id?: string
  member_account_id?: string
  prefix?: string
}

export interface MacieS3BucketAssociationAttributes {
  bucket_name: string
  id: string
  member_account_id?: string
  prefix?: string
}

export class MacieS3BucketAssociation extends Resource<
  MacieS3BucketAssociationArguments,
  MacieS3BucketAssociationAttributes
> {
  _kind = 'aws_macie_s3_bucket_association'

  get bucket_name() {
    return this._attr('bucket_name')
  }

  get id() {
    return this._attr('id')
  }

  get member_account_id() {
    return this._attr('member_account_id')
  }

  get prefix() {
    return this._attr('prefix')
  }
}
