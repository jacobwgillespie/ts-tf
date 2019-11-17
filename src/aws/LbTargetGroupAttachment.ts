import {Resource} from '../Resource'

export interface LbTargetGroupAttachmentArguments {
  availability_zone?: string
  id?: string
  port?: number
  target_group_arn: string
  target_id: string
}

export interface LbTargetGroupAttachmentAttributes {
  availability_zone?: string
  id: string
  port?: number
  target_group_arn: string
  target_id: string
}

export class LbTargetGroupAttachment extends Resource<
  LbTargetGroupAttachmentArguments,
  LbTargetGroupAttachmentAttributes
> {
  kind = 'aws_lb_target_group_attachment'
  _outputAttrNames = ['availability_zone', 'id', 'port', 'target_group_arn', 'target_id'] as const
}
