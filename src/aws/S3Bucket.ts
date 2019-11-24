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
  _kind = 'aws_s3_bucket'

  get acceleration_status() {
    return this._attr('acceleration_status')
  }

  get acl() {
    return this._attr('acl')
  }

  get arn() {
    return this._attr('arn')
  }

  get bucket() {
    return this._attr('bucket')
  }

  get bucket_domain_name() {
    return this._attr('bucket_domain_name')
  }

  get bucket_prefix() {
    return this._attr('bucket_prefix')
  }

  get bucket_regional_domain_name() {
    return this._attr('bucket_regional_domain_name')
  }

  get force_destroy() {
    return this._attr('force_destroy')
  }

  get hosted_zone_id() {
    return this._attr('hosted_zone_id')
  }

  get id() {
    return this._attr('id')
  }

  get policy() {
    return this._attr('policy')
  }

  get region() {
    return this._attr('region')
  }

  get request_payer() {
    return this._attr('request_payer')
  }

  get tags() {
    return this._attr('tags')
  }

  get website_domain() {
    return this._attr('website_domain')
  }

  get website_endpoint() {
    return this._attr('website_endpoint')
  }
}
