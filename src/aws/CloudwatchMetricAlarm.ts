import {Resource} from '../Resource'

export interface CloudwatchMetricAlarmArguments {
  actions_enabled?: boolean
  alarm_actions?: Set<string>
  alarm_description?: string
  alarm_name: string
  comparison_operator: string
  datapoints_to_alarm?: number
  dimensions?: {[key: string]: string}
  evaluate_low_sample_count_percentiles?: string
  evaluation_periods: number
  extended_statistic?: string
  id?: string
  insufficient_data_actions?: Set<string>
  metric_name?: string
  namespace?: string
  ok_actions?: Set<string>
  period?: number
  statistic?: string
  tags?: {[key: string]: string}
  threshold: number
  treat_missing_data?: string
  unit?: string
}

export interface CloudwatchMetricAlarmAttributes {
  actions_enabled?: boolean
  alarm_actions?: Set<string>
  alarm_description?: string
  alarm_name: string
  arn: string
  comparison_operator: string
  datapoints_to_alarm?: number
  dimensions?: {[key: string]: string}
  evaluate_low_sample_count_percentiles: string
  evaluation_periods: number
  extended_statistic?: string
  id: string
  insufficient_data_actions?: Set<string>
  metric_name?: string
  namespace?: string
  ok_actions?: Set<string>
  period?: number
  statistic?: string
  tags?: {[key: string]: string}
  threshold: number
  treat_missing_data?: string
  unit?: string
}

export class CloudwatchMetricAlarm extends Resource<CloudwatchMetricAlarmArguments, CloudwatchMetricAlarmAttributes> {
  _kind = 'aws_cloudwatch_metric_alarm'

  get actions_enabled() {
    return this._attr('actions_enabled')
  }

  get alarm_actions() {
    return this._attr('alarm_actions')
  }

  get alarm_description() {
    return this._attr('alarm_description')
  }

  get alarm_name() {
    return this._attr('alarm_name')
  }

  get arn() {
    return this._attr('arn')
  }

  get comparison_operator() {
    return this._attr('comparison_operator')
  }

  get datapoints_to_alarm() {
    return this._attr('datapoints_to_alarm')
  }

  get dimensions() {
    return this._attr('dimensions')
  }

  get evaluate_low_sample_count_percentiles() {
    return this._attr('evaluate_low_sample_count_percentiles')
  }

  get evaluation_periods() {
    return this._attr('evaluation_periods')
  }

  get extended_statistic() {
    return this._attr('extended_statistic')
  }

  get id() {
    return this._attr('id')
  }

  get insufficient_data_actions() {
    return this._attr('insufficient_data_actions')
  }

  get metric_name() {
    return this._attr('metric_name')
  }

  get namespace() {
    return this._attr('namespace')
  }

  get ok_actions() {
    return this._attr('ok_actions')
  }

  get period() {
    return this._attr('period')
  }

  get statistic() {
    return this._attr('statistic')
  }

  get tags() {
    return this._attr('tags')
  }

  get threshold() {
    return this._attr('threshold')
  }

  get treat_missing_data() {
    return this._attr('treat_missing_data')
  }

  get unit() {
    return this._attr('unit')
  }
}
