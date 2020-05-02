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
  _kind = 'aws_appautoscaling_policy'

  get adjustment_type() {
    return this._attr('adjustment_type')
  }

  get alarms() {
    return this._attr('alarms')
  }

  get arn() {
    return this._attr('arn')
  }

  get cooldown() {
    return this._attr('cooldown')
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

  get name() {
    return this._attr('name')
  }

  get policy_type() {
    return this._attr('policy_type')
  }

  get resource_id() {
    return this._attr('resource_id')
  }

  get scalable_dimension() {
    return this._attr('scalable_dimension')
  }

  get service_namespace() {
    return this._attr('service_namespace')
  }
}
