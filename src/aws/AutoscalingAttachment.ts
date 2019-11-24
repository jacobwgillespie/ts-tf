import {Resource} from '../Resource'

export interface AutoscalingAttachmentArguments {
  alb_target_group_arn?: string
  autoscaling_group_name: string
  elb?: string
  id?: string
}

export interface AutoscalingAttachmentAttributes {
  alb_target_group_arn?: string
  autoscaling_group_name: string
  elb?: string
  id: string
}

export class AutoscalingAttachment extends Resource<AutoscalingAttachmentArguments, AutoscalingAttachmentAttributes> {
  _kind = 'aws_autoscaling_attachment'

  get alb_target_group_arn() {
    return this._attr('alb_target_group_arn')
  }

  get autoscaling_group_name() {
    return this._attr('autoscaling_group_name')
  }

  get elb() {
    return this._attr('elb')
  }

  get id() {
    return this._attr('id')
  }
}
