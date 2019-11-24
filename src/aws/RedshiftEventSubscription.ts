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
  _kind = 'aws_redshift_event_subscription'

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

  get severity() {
    return this._attr('severity')
  }

  get sns_topic_arn() {
    return this._attr('sns_topic_arn')
  }

  get source_ids() {
    return this._attr('source_ids')
  }

  get source_type() {
    return this._attr('source_type')
  }

  get status() {
    return this._attr('status')
  }

  get tags() {
    return this._attr('tags')
  }
}
