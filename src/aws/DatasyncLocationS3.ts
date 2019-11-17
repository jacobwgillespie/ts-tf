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
  kind = 'aws_datasync_location_s3'
  _outputAttrNames = ['arn', 'id', 's3_bucket_arn', 'subdirectory', 'tags', 'uri'] as const
}
