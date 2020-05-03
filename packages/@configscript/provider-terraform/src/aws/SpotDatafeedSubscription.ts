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
  _kind = 'aws_spot_datafeed_subscription'

  get bucket() {
    return this._attr('bucket')
  }

  get id() {
    return this._attr('id')
  }

  get prefix() {
    return this._attr('prefix')
  }
}
