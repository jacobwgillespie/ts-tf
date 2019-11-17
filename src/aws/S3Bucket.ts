import {Resource} from '../Resource'

export interface S3BucketArguments {
  acceleration_status?: string
  acl?: string
  arn?: string
  bucket?: string
  bucket_prefix?: string
  force_destroy?: boolean
  hosted_zone_id?: string
  id?: string
  policy?: string
  region?: string
  request_payer?: string
  tags?: {[key: string]: string}
  website_domain?: string
  website_endpoint?: string
}

export interface S3BucketAttributes {
  acceleration_status: string
  acl?: string
  arn: string
  bucket: string
  bucket_domain_name: string
  bucket_prefix?: string
  bucket_regional_domain_name: string
  force_destroy?: boolean
  hosted_zone_id: string
  id: string
  policy?: string
  region: string
  request_payer: string
  tags?: {[key: string]: string}
  website_domain: string
  website_endpoint: string
}

export class S3Bucket extends Resource<S3BucketArguments, S3BucketAttributes> {
  kind = 'aws_s3_bucket'
  _outputAttrNames = [
    'acceleration_status',
    'acl',
    'arn',
    'bucket',
    'bucket_domain_name',
    'bucket_prefix',
    'bucket_regional_domain_name',
    'force_destroy',
    'hosted_zone_id',
    'id',
    'policy',
    'region',
    'request_payer',
    'tags',
    'website_domain',
    'website_endpoint',
  ] as const
}
