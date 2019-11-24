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
  _kind = 'aws_db_event_subscription'

  get arn() {
    return this._attr('arn')
  }

  get customer_aws_id() {
    return this._attr('customer_aws_id')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get event_categories() {
    return this._attr('event_categories')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get sns_topic() {
    return this._attr('sns_topic')
  }

  get source_ids() {
    return this._attr('source_ids')
  }

  get source_type() {
    return this._attr('source_type')
  }

  get tags() {
    return this._attr('tags')
  }
}
