import {Resource} from '../Resource'

export interface AutoscalingPolicyArguments {
  adjustment_type?: string
  autoscaling_group_name: string
  cooldown?: number
  estimated_instance_warmup?: number
  id?: string
  metric_aggregation_type?: string
  min_adjustment_magnitude?: number
  min_adjustment_step?: number
  name: string
  policy_type?: string
  scaling_adjustment?: number
}

export interface AutoscalingPolicyAttributes {
  adjustment_type?: string
  arn: string
  autoscaling_group_name: string
  cooldown?: number
  estimated_instance_warmup?: number
  id: string
  metric_aggregation_type: string
  min_adjustment_magnitude?: number
  min_adjustment_step?: number
  name: string
  policy_type?: string
  scaling_adjustment?: number
}

export class AutoscalingPolicy extends Resource<AutoscalingPolicyArguments, AutoscalingPolicyAttributes> {
  kind = 'aws_autoscaling_policy'
  _outputAttrNames = [
    'adjustment_type',
    'arn',
    'autoscaling_group_name',
    'cooldown',
    'estimated_instance_warmup',
    'id',
    'metric_aggregation_type',
    'min_adjustment_magnitude',
    'min_adjustment_step',
    'name',
    'policy_type',
    'scaling_adjustment',
  ] as const
}
