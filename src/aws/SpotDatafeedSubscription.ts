import {Resource} from '../Resource'

export interface SpotDatafeedSubscriptionArguments {
  bucket: string
  id?: string
  prefix?: string
}

export interface SpotDatafeedSubscriptionAttributes {
  bucket: string
  id: string
  prefix?: string
}

export class SpotDatafeedSubscription extends Resource<
  SpotDatafeedSubscriptionArguments,
  SpotDatafeedSubscriptionAttributes
> {
  kind = 'aws_spot_datafeed_subscription'
  _outputAttrNames = ['bucket', 'id', 'prefix'] as const
}
