import {Resource} from '../Resource'

export interface SecurityhubProductSubscriptionArguments {
  id?: string
  product_arn: string
}

export interface SecurityhubProductSubscriptionAttributes {
  arn: string
  id: string
  product_arn: string
}

export class SecurityhubProductSubscription extends Resource<
  SecurityhubProductSubscriptionArguments,
  SecurityhubProductSubscriptionAttributes
> {
  _kind = 'aws_securityhub_product_subscription'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get product_arn() {
    return this._attr('product_arn')
  }
}
