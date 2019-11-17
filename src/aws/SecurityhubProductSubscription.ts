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
  kind = 'aws_securityhub_product_subscription'
  _outputAttrNames = ['arn', 'id', 'product_arn'] as const
}
