import {Resource} from '../Resource'

export interface AutoscalingNotificationArguments {
  group_names: Set<string>
  id?: string
  notifications: Set<string>
  topic_arn: string
}

export interface AutoscalingNotificationAttributes {
  group_names: Set<string>
  id: string
  notifications: Set<string>
  topic_arn: string
}

export class AutoscalingNotification extends Resource<
  AutoscalingNotificationArguments,
  AutoscalingNotificationAttributes
> {
  kind = 'aws_autoscaling_notification'
  _outputAttrNames = ['group_names', 'id', 'notifications', 'topic_arn'] as const
}
