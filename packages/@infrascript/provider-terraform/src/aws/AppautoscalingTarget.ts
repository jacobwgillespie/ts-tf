import {Resource} from '../Resource'

export interface AppautoscalingTargetArguments {
  id?: string
  max_capacity: number
  min_capacity: number
  resource_id: string
  role_arn?: string
  scalable_dimension: string
  service_namespace: string
}

export interface AppautoscalingTargetAttributes {
  id: string
  max_capacity: number
  min_capacity: number
  resource_id: string
  role_arn: string
  scalable_dimension: string
  service_namespace: string
}

export class AppautoscalingTarget extends Resource<AppautoscalingTargetArguments, AppautoscalingTargetAttributes> {
  _kind = 'aws_appautoscaling_target'

  get id() {
    return this._attr('id')
  }

  get max_capacity() {
    return this._attr('max_capacity')
  }

  get min_capacity() {
    return this._attr('min_capacity')
  }

  get resource_id() {
    return this._attr('resource_id')
  }

  get role_arn() {
    return this._attr('role_arn')
  }

  get scalable_dimension() {
    return this._attr('scalable_dimension')
  }

  get service_namespace() {
    return this._attr('service_namespace')
  }
}
