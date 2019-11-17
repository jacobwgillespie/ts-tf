import {Resource} from '../Resource'

export interface AutoscalingScheduleArguments {
  autoscaling_group_name: string
  desired_capacity?: number
  end_time?: string
  id?: string
  max_size?: number
  min_size?: number
  recurrence?: string
  scheduled_action_name: string
  start_time?: string
}

export interface AutoscalingScheduleAttributes {
  arn: string
  autoscaling_group_name: string
  desired_capacity: number
  end_time: string
  id: string
  max_size: number
  min_size: number
  recurrence: string
  scheduled_action_name: string
  start_time: string
}

export class AutoscalingSchedule extends Resource<AutoscalingScheduleArguments, AutoscalingScheduleAttributes> {
  kind = 'aws_autoscaling_schedule'
  _outputAttrNames = [
    'arn',
    'autoscaling_group_name',
    'desired_capacity',
    'end_time',
    'id',
    'max_size',
    'min_size',
    'recurrence',
    'scheduled_action_name',
    'start_time',
  ] as const
}
