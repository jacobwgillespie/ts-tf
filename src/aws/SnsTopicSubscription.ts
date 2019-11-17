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
  kind = 'aws_sns_topic_subscription'
  _outputAttrNames = [
    'arn',
    'confirmation_timeout_in_minutes',
    'delivery_policy',
    'endpoint',
    'endpoint_auto_confirms',
    'filter_policy',
    'id',
    'protocol',
    'raw_message_delivery',
    'topic_arn',
  ] as const
}
