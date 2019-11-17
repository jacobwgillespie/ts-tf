import {Resource} from '../Resource'

export interface CloudwatchLogDestinationArguments {
  id?: string
  name: string
  role_arn: string
  target_arn: string
}

export interface CloudwatchLogDestinationAttributes {
  arn: string
  id: string
  name: string
  role_arn: string
  target_arn: string
}

export class CloudwatchLogDestination extends Resource<
  CloudwatchLogDestinationArguments,
  CloudwatchLogDestinationAttributes
> {
  kind = 'aws_cloudwatch_log_destination'
  _outputAttrNames = ['arn', 'id', 'name', 'role_arn', 'target_arn'] as const
}
