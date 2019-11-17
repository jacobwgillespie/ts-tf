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
  kind = 'aws_cloudwatch_metric_alarm'
  _outputAttrNames = [
    'actions_enabled',
    'alarm_actions',
    'alarm_description',
    'alarm_name',
    'arn',
    'comparison_operator',
    'datapoints_to_alarm',
    'dimensions',
    'evaluate_low_sample_count_percentiles',
    'evaluation_periods',
    'extended_statistic',
    'id',
    'insufficient_data_actions',
    'metric_name',
    'namespace',
    'ok_actions',
    'period',
    'statistic',
    'tags',
    'threshold',
    'treat_missing_data',
    'unit',
  ] as const
}
