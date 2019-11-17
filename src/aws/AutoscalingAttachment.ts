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
  kind = 'aws_autoscaling_attachment'
  _outputAttrNames = ['alb_target_group_arn', 'autoscaling_group_name', 'elb', 'id'] as const
}
