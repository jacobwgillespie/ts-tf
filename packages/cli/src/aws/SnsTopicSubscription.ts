import {Resource} from '../Resource'

export interface SnsTopicSubscriptionArguments {
  confirmation_timeout_in_minutes?: number
  delivery_policy?: string
  endpoint: string
  endpoint_auto_confirms?: boolean
  filter_policy?: string
  id?: string
  protocol: string
  raw_message_delivery?: boolean
  topic_arn: string
}

export interface SnsTopicSubscriptionAttributes {
  arn: string
  confirmation_timeout_in_minutes?: number
  delivery_policy?: string
  endpoint: string
  endpoint_auto_confirms?: boolean
  filter_policy?: string
  id: string
  protocol: string
  raw_message_delivery?: boolean
  topic_arn: string
}

export class SnsTopicSubscription extends Resource<SnsTopicSubscriptionArguments, SnsTopicSubscriptionAttributes> {
  _kind = 'aws_sns_topic_subscription'

  get arn() {
    return this._attr('arn')
  }

  get confirmation_timeout_in_minutes() {
    return this._attr('confirmation_timeout_in_minutes')
  }

  get delivery_policy() {
    return this._attr('delivery_policy')
  }

  get endpoint() {
    return this._attr('endpoint')
  }

  get endpoint_auto_confirms() {
    return this._attr('endpoint_auto_confirms')
  }

  get filter_policy() {
    return this._attr('filter_policy')
  }

  get id() {
    return this._attr('id')
  }

  get protocol() {
    return this._attr('protocol')
  }

  get raw_message_delivery() {
    return this._attr('raw_message_delivery')
  }

  get topic_arn() {
    return this._attr('topic_arn')
  }
}
