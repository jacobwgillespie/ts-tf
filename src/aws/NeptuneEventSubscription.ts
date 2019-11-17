import {Resource} from '../Resource'

export interface NeptuneEventSubscriptionArguments {
  enabled?: boolean
  event_categories?: Set<string>
  id?: string
  name?: string
  name_prefix?: string
  sns_topic_arn: string
  source_ids?: Set<string>
  source_type?: string
  tags?: {[key: string]: string}
}

export interface NeptuneEventSubscriptionAttributes {
  arn: string
  customer_aws_id: string
  enabled?: boolean
  event_categories?: Set<string>
  id: string
  name: string
  name_prefix: string
  sns_topic_arn: string
  source_ids?: Set<string>
  source_type?: string
  tags?: {[key: string]: string}
}

export class NeptuneEventSubscription extends Resource<
  NeptuneEventSubscriptionArguments,
  NeptuneEventSubscriptionAttributes
> {
  kind = 'aws_neptune_event_subscription'
  _outputAttrNames = [
    'arn',
    'customer_aws_id',
    'enabled',
    'event_categories',
    'id',
    'name',
    'name_prefix',
    'sns_topic_arn',
    'source_ids',
    'source_type',
    'tags',
  ] as const
}
