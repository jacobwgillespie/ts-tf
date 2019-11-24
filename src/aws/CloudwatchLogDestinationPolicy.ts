import {Resource} from '../Resource'

export interface CloudwatchLogDestinationPolicyArguments {
  access_policy: string
  destination_name: string
  id?: string
}

export interface CloudwatchLogDestinationPolicyAttributes {
  access_policy: string
  destination_name: string
  id: string
}

export class CloudwatchLogDestinationPolicy extends Resource<
  CloudwatchLogDestinationPolicyArguments,
  CloudwatchLogDestinationPolicyAttributes
> {
  _kind = 'aws_cloudwatch_log_destination_policy'

  get access_policy() {
    return this._attr('access_policy')
  }

  get destination_name() {
    return this._attr('destination_name')
  }

  get id() {
    return this._attr('id')
  }
}
