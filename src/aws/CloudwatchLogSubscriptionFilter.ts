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
  kind = 'aws_cloudwatch_log_subscription_filter'
  _outputAttrNames = [
    'destination_arn',
    'distribution',
    'filter_pattern',
    'id',
    'log_group_name',
    'name',
    'role_arn',
  ] as const
}
