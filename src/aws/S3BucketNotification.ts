import {Resource} from '../Resource'

export interface S3BucketNotificationArguments {
  bucket: string
  id?: string
}

export interface S3BucketNotificationAttributes {
  bucket: string
  id: string
}

export class S3BucketNotification extends Resource<S3BucketNotificationArguments, S3BucketNotificationAttributes> {
  kind = 'aws_s3_bucket_notification'
  _outputAttrNames = ['bucket', 'id'] as const
}
