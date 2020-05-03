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
  _kind = 'aws_cloudwatch_log_metric_filter'

  get id() {
    return this._attr('id')
  }

  get log_group_name() {
    return this._attr('log_group_name')
  }

  get name() {
    return this._attr('name')
  }

  get pattern() {
    return this._attr('pattern')
  }
}
