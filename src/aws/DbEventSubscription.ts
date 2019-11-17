import {Resource} from '../Resource'

export interface DbEventSubscriptionArguments {
  enabled?: boolean
  event_categories?: Set<string>
  id?: string
  name?: string
  name_prefix?: string
  sns_topic: string
  source_ids?: Set<string>
  source_type?: string
  tags?: {[key: string]: string}
}

export interface DbEventSubscriptionAttributes {
  arn: string
  customer_aws_id: string
  enabled?: boolean
  event_categories?: Set<string>
  id: string
  name: string
  name_prefix?: string
  sns_topic: string
  source_ids?: Set<string>
  source_type?: string
  tags?: {[key: string]: string}
}

export class DbEventSubscription extends Resource<DbEventSubscriptionArguments, DbEventSubscriptionAttributes> {
  kind = 'aws_db_event_subscription'
  _outputAttrNames = [
    'arn',
    'customer_aws_id',
    'enabled',
    'event_categories',
    'id',
    'name',
    'name_prefix',
    'sns_topic',
    'source_ids',
    'source_type',
    'tags',
  ] as const
}
