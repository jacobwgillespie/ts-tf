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
  _kind = 'aws_securityhub_standards_subscription'

  get id() {
    return this._attr('id')
  }

  get standards_arn() {
    return this._attr('standards_arn')
  }
}
