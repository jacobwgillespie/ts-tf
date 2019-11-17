import {Resource} from '../Resource'

export interface CloudwatchLogStreamArguments {
  id?: string
  log_group_name: string
  name: string
}

export interface CloudwatchLogStreamAttributes {
  arn: string
  id: string
  log_group_name: string
  name: string
}

export class CloudwatchLogStream extends Resource<CloudwatchLogStreamArguments, CloudwatchLogStreamAttributes> {
  kind = 'aws_cloudwatch_log_stream'
  _outputAttrNames = ['arn', 'id', 'log_group_name', 'name'] as const
}
