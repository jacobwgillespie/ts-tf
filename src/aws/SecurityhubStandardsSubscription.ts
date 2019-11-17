import {Resource} from '../Resource'

export interface SecurityhubStandardsSubscriptionArguments {
  id?: string
  standards_arn: string
}

export interface SecurityhubStandardsSubscriptionAttributes {
  id: string
  standards_arn: string
}

export class SecurityhubStandardsSubscription extends Resource<
  SecurityhubStandardsSubscriptionArguments,
  SecurityhubStandardsSubscriptionAttributes
> {
  kind = 'aws_securityhub_standards_subscription'
  _outputAttrNames = ['id', 'standards_arn'] as const
}
