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
  kind = 'aws_ses_identity_notification_topic'
  _outputAttrNames = ['id', 'identity', 'include_original_headers', 'notification_type', 'topic_arn'] as const
}
