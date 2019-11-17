import {Resource} from '../Resource'

export interface RedshiftEventSubscriptionArguments {
  enabled?: boolean
  event_categories?: Set<string>
  id?: string
  name: string
  severity?: string
  sns_topic_arn: string
  source_ids?: Set<string>
  source_type?: string
  tags?: {[key: string]: string}
}

export interface RedshiftEventSubscriptionAttributes {
  arn: string
  customer_aws_id: string
  enabled?: boolean
  event_categories?: Set<string>
  id: string
  name: string
  severity?: string
  sns_topic_arn: string
  source_ids?: Set<string>
  source_type?: string
  status: string
  tags?: {[key: string]: string}
}

export class RedshiftEventSubscription extends Resource<
  RedshiftEventSubscriptionArguments,
  RedshiftEventSubscriptionAttributes
> {
  kind = 'aws_redshift_event_subscription'
  _outputAttrNames = [
    'arn',
    'customer_aws_id',
    'enabled',
    'event_categories',
    'id',
    'name',
    'severity',
    'sns_topic_arn',
    'source_ids',
    'source_type',
    'status',
    'tags',
  ] as const
}
