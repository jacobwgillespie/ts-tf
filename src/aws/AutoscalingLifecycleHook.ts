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
  kind = 'aws_autoscaling_lifecycle_hook'
  _outputAttrNames = [
    'autoscaling_group_name',
    'default_result',
    'heartbeat_timeout',
    'id',
    'lifecycle_transition',
    'name',
    'notification_metadata',
    'notification_target_arn',
    'role_arn',
  ] as const
}
