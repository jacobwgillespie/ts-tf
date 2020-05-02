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
  _kind = 'aws_autoscaling_policy'

  get adjustment_type() {
    return this._attr('adjustment_type')
  }

  get arn() {
    return this._attr('arn')
  }

  get autoscaling_group_name() {
    return this._attr('autoscaling_group_name')
  }

  get cooldown() {
    return this._attr('cooldown')
  }

  get estimated_instance_warmup() {
    return this._attr('estimated_instance_warmup')
  }

  get id() {
    return this._attr('id')
  }

  get metric_aggregation_type() {
    return this._attr('metric_aggregation_type')
  }

  get min_adjustment_magnitude() {
    return this._attr('min_adjustment_magnitude')
  }

  get min_adjustment_step() {
    return this._attr('min_adjustment_step')
  }

  get name() {
    return this._attr('name')
  }

  get policy_type() {
    return this._attr('policy_type')
  }

  get scaling_adjustment() {
    return this._attr('scaling_adjustment')
  }
}
