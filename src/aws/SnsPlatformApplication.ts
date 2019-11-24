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
  _kind = 'aws_sns_platform_application'

  get arn() {
    return this._attr('arn')
  }

  get event_delivery_failure_topic_arn() {
    return this._attr('event_delivery_failure_topic_arn')
  }

  get event_endpoint_created_topic_arn() {
    return this._attr('event_endpoint_created_topic_arn')
  }

  get event_endpoint_deleted_topic_arn() {
    return this._attr('event_endpoint_deleted_topic_arn')
  }

  get event_endpoint_updated_topic_arn() {
    return this._attr('event_endpoint_updated_topic_arn')
  }

  get failure_feedback_role_arn() {
    return this._attr('failure_feedback_role_arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get platform() {
    return this._attr('platform')
  }

  get platform_credential() {
    return this._attr('platform_credential')
  }

  get platform_principal() {
    return this._attr('platform_principal')
  }

  get success_feedback_role_arn() {
    return this._attr('success_feedback_role_arn')
  }

  get success_feedback_sample_rate() {
    return this._attr('success_feedback_sample_rate')
  }
}
