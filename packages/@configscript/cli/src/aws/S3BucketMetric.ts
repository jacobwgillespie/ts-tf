import {Resource} from '../Resource'

export interface S3BucketMetricArguments {
  bucket: string
  id?: string
  name: string
}

export interface S3BucketMetricAttributes {
  bucket: string
  id: string
  name: string
}

export class S3BucketMetric extends Resource<S3BucketMetricArguments, S3BucketMetricAttributes> {
  _kind = 'aws_s3_bucket_metric'

  get bucket() {
    return this._attr('bucket')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
