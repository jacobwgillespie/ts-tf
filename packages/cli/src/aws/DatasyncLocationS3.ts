import {Resource} from '../Resource'

export interface DatasyncLocationS3Arguments {
  id?: string
  s3_bucket_arn: string
  subdirectory: string
  tags?: {[key: string]: string}
}

export interface DatasyncLocationS3Attributes {
  arn: string
  id: string
  s3_bucket_arn: string
  subdirectory: string
  tags?: {[key: string]: string}
  uri: string
}

export class DatasyncLocationS3 extends Resource<DatasyncLocationS3Arguments, DatasyncLocationS3Attributes> {
  _kind = 'aws_datasync_location_s3'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get s3_bucket_arn() {
    return this._attr('s3_bucket_arn')
  }

  get subdirectory() {
    return this._attr('subdirectory')
  }

  get tags() {
    return this._attr('tags')
  }

  get uri() {
    return this._attr('uri')
  }
}
