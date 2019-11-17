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
  kind = 'aws_s3_bucket_metric'
  _outputAttrNames = ['bucket', 'id', 'name'] as const
}
