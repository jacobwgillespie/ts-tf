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
  _kind = 'aws_autoscaling_notification'

  get group_names() {
    return this._attr('group_names')
  }

  get id() {
    return this._attr('id')
  }

  get notifications() {
    return this._attr('notifications')
  }

  get topic_arn() {
    return this._attr('topic_arn')
  }
}
