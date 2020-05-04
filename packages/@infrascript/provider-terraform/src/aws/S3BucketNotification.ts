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
  _kind = 'aws_s3_bucket_notification'

  get bucket() {
    return this._attr('bucket')
  }

  get id() {
    return this._attr('id')
  }
}
