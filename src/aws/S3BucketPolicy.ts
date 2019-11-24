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
  _kind = 'aws_s3_bucket_policy'

  get bucket() {
    return this._attr('bucket')
  }

  get id() {
    return this._attr('id')
  }

  get policy() {
    return this._attr('policy')
  }
}
