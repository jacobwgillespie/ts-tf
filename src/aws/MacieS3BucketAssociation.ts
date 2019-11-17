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
  kind = 'aws_macie_s3_bucket_association'
  _outputAttrNames = ['bucket_name', 'id', 'member_account_id', 'prefix'] as const
}
