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
  kind = 'aws_appautoscaling_target'
  _outputAttrNames = [
    'id',
    'max_capacity',
    'min_capacity',
    'resource_id',
    'role_arn',
    'scalable_dimension',
    'service_namespace',
  ] as const
}
