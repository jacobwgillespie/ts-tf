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
  kind = 'aws_cloudwatch_log_destination_policy'
  _outputAttrNames = ['access_policy', 'destination_name', 'id'] as const
}
