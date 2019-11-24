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
  _kind = 'aws_autoscaling_schedule'

  get arn() {
    return this._attr('arn')
  }

  get autoscaling_group_name() {
    return this._attr('autoscaling_group_name')
  }

  get desired_capacity() {
    return this._attr('desired_capacity')
  }

  get end_time() {
    return this._attr('end_time')
  }

  get id() {
    return this._attr('id')
  }

  get max_size() {
    return this._attr('max_size')
  }

  get min_size() {
    return this._attr('min_size')
  }

  get recurrence() {
    return this._attr('recurrence')
  }

  get scheduled_action_name() {
    return this._attr('scheduled_action_name')
  }

  get start_time() {
    return this._attr('start_time')
  }
}
