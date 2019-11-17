import {Resource} from '../Resource'

export interface S3BucketPolicyArguments {
  bucket: string
  id?: string
  policy: string
}

export interface S3BucketPolicyAttributes {
  bucket: string
  id: string
  policy: string
}

export class S3BucketPolicy extends Resource<S3BucketPolicyArguments, S3BucketPolicyAttributes> {
  kind = 'aws_s3_bucket_policy'
  _outputAttrNames = ['bucket', 'id', 'policy'] as const
}
