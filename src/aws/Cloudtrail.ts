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
  kind = 'aws_cloudtrail'
  _outputAttrNames = [
    'arn',
    'cloud_watch_logs_group_arn',
    'cloud_watch_logs_role_arn',
    'enable_log_file_validation',
    'enable_logging',
    'home_region',
    'id',
    'include_global_service_events',
    'is_multi_region_trail',
    'is_organization_trail',
    'kms_key_id',
    'name',
    's3_bucket_name',
    's3_key_prefix',
    'sns_topic_name',
    'tags',
  ] as const
}
