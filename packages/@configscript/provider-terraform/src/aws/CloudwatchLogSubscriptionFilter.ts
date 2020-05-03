import {Resource} from '../Resource'

export interface CloudwatchLogSubscriptionFilterArguments {
  destination_arn: string
  distribution?: string
  filter_pattern: string
  id?: string
  log_group_name: string
  name: string
  role_arn?: string
}

export interface CloudwatchLogSubscriptionFilterAttributes {
  destination_arn: string
  distribution?: string
  filter_pattern: string
  id: string
  log_group_name: string
  name: string
  role_arn: string
}

export class CloudwatchLogSubscriptionFilter extends Resource<
  CloudwatchLogSubscriptionFilterArguments,
  CloudwatchLogSubscriptionFilterAttributes
> {
  _kind = 'aws_cloudwatch_log_subscription_filter'

  get destination_arn() {
    return this._attr('destination_arn')
  }

  get distribution() {
    return this._attr('distribution')
  }

  get filter_pattern() {
    return this._attr('filter_pattern')
  }

  get id() {
    return this._attr('id')
  }

  get log_group_name() {
    return this._attr('log_group_name')
  }

  get name() {
    return this._attr('name')
  }

  get role_arn() {
    return this._attr('role_arn')
  }
}
