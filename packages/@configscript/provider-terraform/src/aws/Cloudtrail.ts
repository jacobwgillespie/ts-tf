import {Resource} from '../Resource'

export interface CloudtrailArguments {
  cloud_watch_logs_group_arn?: string
  cloud_watch_logs_role_arn?: string
  enable_log_file_validation?: boolean
  enable_logging?: boolean
  id?: string
  include_global_service_events?: boolean
  is_multi_region_trail?: boolean
  is_organization_trail?: boolean
  kms_key_id?: string
  name: string
  s3_bucket_name: string
  s3_key_prefix?: string
  sns_topic_name?: string
  tags?: {[key: string]: string}
}

export interface CloudtrailAttributes {
  arn: string
  cloud_watch_logs_group_arn?: string
  cloud_watch_logs_role_arn?: string
  enable_log_file_validation?: boolean
  enable_logging?: boolean
  home_region: string
  id: string
  include_global_service_events?: boolean
  is_multi_region_trail?: boolean
  is_organization_trail?: boolean
  kms_key_id?: string
  name: string
  s3_bucket_name: string
  s3_key_prefix?: string
  sns_topic_name?: string
  tags?: {[key: string]: string}
}

export class Cloudtrail extends Resource<CloudtrailArguments, CloudtrailAttributes> {
  _kind = 'aws_cloudtrail'

  get arn() {
    return this._attr('arn')
  }

  get cloud_watch_logs_group_arn() {
    return this._attr('cloud_watch_logs_group_arn')
  }

  get cloud_watch_logs_role_arn() {
    return this._attr('cloud_watch_logs_role_arn')
  }

  get enable_log_file_validation() {
    return this._attr('enable_log_file_validation')
  }

  get enable_logging() {
    return this._attr('enable_logging')
  }

  get home_region() {
    return this._attr('home_region')
  }

  get id() {
    return this._attr('id')
  }

  get include_global_service_events() {
    return this._attr('include_global_service_events')
  }

  get is_multi_region_trail() {
    return this._attr('is_multi_region_trail')
  }

  get is_organization_trail() {
    return this._attr('is_organization_trail')
  }

  get kms_key_id() {
    return this._attr('kms_key_id')
  }

  get name() {
    return this._attr('name')
  }

  get s3_bucket_name() {
    return this._attr('s3_bucket_name')
  }

  get s3_key_prefix() {
    return this._attr('s3_key_prefix')
  }

  get sns_topic_name() {
    return this._attr('sns_topic_name')
  }

  get tags() {
    return this._attr('tags')
  }
}
