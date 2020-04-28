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
  _kind = 'aws_appautoscaling_scheduled_action'

  get arn() {
    return this._attr('arn')
  }

  get end_time() {
    return this._attr('end_time')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get resource_id() {
    return this._attr('resource_id')
  }

  get scalable_dimension() {
    return this._attr('scalable_dimension')
  }

  get schedule() {
    return this._attr('schedule')
  }

  get service_namespace() {
    return this._attr('service_namespace')
  }

  get start_time() {
    return this._attr('start_time')
  }
}
