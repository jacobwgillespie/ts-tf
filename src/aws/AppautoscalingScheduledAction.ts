import {Resource} from '../Resource'

export interface AppautoscalingScheduledActionArguments {
  end_time?: string
  id?: string
  name: string
  resource_id: string
  scalable_dimension?: string
  schedule?: string
  service_namespace: string
  start_time?: string
}

export interface AppautoscalingScheduledActionAttributes {
  arn: string
  end_time?: string
  id: string
  name: string
  resource_id: string
  scalable_dimension?: string
  schedule?: string
  service_namespace: string
  start_time?: string
}

export class AppautoscalingScheduledAction extends Resource<
  AppautoscalingScheduledActionArguments,
  AppautoscalingScheduledActionAttributes
> {
  kind = 'aws_appautoscaling_scheduled_action'
  _outputAttrNames = [
    'arn',
    'end_time',
    'id',
    'name',
    'resource_id',
    'scalable_dimension',
    'schedule',
    'service_namespace',
    'start_time',
  ] as const
}
