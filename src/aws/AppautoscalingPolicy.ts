import {Resource} from '../Resource'

export interface AppautoscalingPolicyArguments {
  adjustment_type?: string
  alarms?: Array<string>
  cooldown?: number
  id?: string
  metric_aggregation_type?: string
  min_adjustment_magnitude?: number
  name: string
  policy_type?: string
  resource_id: string
  scalable_dimension: string
  service_namespace: string
}

export interface AppautoscalingPolicyAttributes {
  adjustment_type?: string
  alarms?: Array<string>
  arn: string
  cooldown?: number
  id: string
  metric_aggregation_type?: string
  min_adjustment_magnitude?: number
  name: string
  policy_type?: string
  resource_id: string
  scalable_dimension: string
  service_namespace: string
}

export class AppautoscalingPolicy extends Resource<AppautoscalingPolicyArguments, AppautoscalingPolicyAttributes> {
  kind = 'aws_appautoscaling_policy'
  _outputAttrNames = [
    'adjustment_type',
    'alarms',
    'arn',
    'cooldown',
    'id',
    'metric_aggregation_type',
    'min_adjustment_magnitude',
    'name',
    'policy_type',
    'resource_id',
    'scalable_dimension',
    'service_namespace',
  ] as const
}
