import {Resource} from '../Resource'

export interface SnsPlatformApplicationArguments {
  event_delivery_failure_topic_arn?: string
  event_endpoint_created_topic_arn?: string
  event_endpoint_deleted_topic_arn?: string
  event_endpoint_updated_topic_arn?: string
  failure_feedback_role_arn?: string
  id?: string
  name: string
  platform: string
  platform_credential: string
  platform_principal?: string
  success_feedback_role_arn?: string
  success_feedback_sample_rate?: string
}

export interface SnsPlatformApplicationAttributes {
  arn: string
  event_delivery_failure_topic_arn?: string
  event_endpoint_created_topic_arn?: string
  event_endpoint_deleted_topic_arn?: string
  event_endpoint_updated_topic_arn?: string
  failure_feedback_role_arn?: string
  id: string
  name: string
  platform: string
  platform_credential: string
  platform_principal?: string
  success_feedback_role_arn?: string
  success_feedback_sample_rate?: string
}

export class SnsPlatformApplication extends Resource<
  SnsPlatformApplicationArguments,
  SnsPlatformApplicationAttributes
> {
  kind = 'aws_sns_platform_application'
  _outputAttrNames = [
    'arn',
    'event_delivery_failure_topic_arn',
    'event_endpoint_created_topic_arn',
    'event_endpoint_deleted_topic_arn',
    'event_endpoint_updated_topic_arn',
    'failure_feedback_role_arn',
    'id',
    'name',
    'platform',
    'platform_credential',
    'platform_principal',
    'success_feedback_role_arn',
    'success_feedback_sample_rate',
  ] as const
}
