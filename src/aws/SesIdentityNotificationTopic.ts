import {Resource} from '../Resource'

export interface SesIdentityNotificationTopicArguments {
  id?: string
  identity: string
  include_original_headers?: boolean
  notification_type: string
  topic_arn?: string
}

export interface SesIdentityNotificationTopicAttributes {
  id: string
  identity: string
  include_original_headers?: boolean
  notification_type: string
  topic_arn?: string
}

export class SesIdentityNotificationTopic extends Resource<
  SesIdentityNotificationTopicArguments,
  SesIdentityNotificationTopicAttributes
> {
  _kind = 'aws_ses_identity_notification_topic'

  get id() {
    return this._attr('id')
  }

  get identity() {
    return this._attr('identity')
  }

  get include_original_headers() {
    return this._attr('include_original_headers')
  }

  get notification_type() {
    return this._attr('notification_type')
  }

  get topic_arn() {
    return this._attr('topic_arn')
  }
}
