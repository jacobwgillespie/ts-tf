import {Resource} from '../Resource'

export interface AutoscalingLifecycleHookArguments {
  autoscaling_group_name: string
  default_result?: string
  heartbeat_timeout?: number
  id?: string
  lifecycle_transition: string
  name: string
  notification_metadata?: string
  notification_target_arn?: string
  role_arn?: string
}

export interface AutoscalingLifecycleHookAttributes {
  autoscaling_group_name: string
  default_result: string
  heartbeat_timeout?: number
  id: string
  lifecycle_transition: string
  name: string
  notification_metadata?: string
  notification_target_arn?: string
  role_arn?: string
}

export class AutoscalingLifecycleHook extends Resource<
  AutoscalingLifecycleHookArguments,
  AutoscalingLifecycleHookAttributes
> {
  _kind = 'aws_autoscaling_lifecycle_hook'

  get autoscaling_group_name() {
    return this._attr('autoscaling_group_name')
  }

  get default_result() {
    return this._attr('default_result')
  }

  get heartbeat_timeout() {
    return this._attr('heartbeat_timeout')
  }

  get id() {
    return this._attr('id')
  }

  get lifecycle_transition() {
    return this._attr('lifecycle_transition')
  }

  get name() {
    return this._attr('name')
  }

  get notification_metadata() {
    return this._attr('notification_metadata')
  }

  get notification_target_arn() {
    return this._attr('notification_target_arn')
  }

  get role_arn() {
    return this._attr('role_arn')
  }
}
