import {Resource} from '../Resource'

export interface CloudwatchLogMetricFilterArguments {
  id?: string
  log_group_name: string
  name: string
  pattern: string
}

export interface CloudwatchLogMetricFilterAttributes {
  id: string
  log_group_name: string
  name: string
  pattern: string
}

export class CloudwatchLogMetricFilter extends Resource<
  CloudwatchLogMetricFilterArguments,
  CloudwatchLogMetricFilterAttributes
> {
  kind = 'aws_cloudwatch_log_metric_filter'
  _outputAttrNames = ['id', 'log_group_name', 'name', 'pattern'] as const
}
