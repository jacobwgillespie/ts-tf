import {Resource} from '../Resource'

export interface AlbTargetGroupAttachmentArguments {
  availability_zone?: string
  id?: string
  port?: number
  target_group_arn: string
  target_id: string
}

export interface AlbTargetGroupAttachmentAttributes {
  availability_zone?: string
  id: string
  port?: number
  target_group_arn: string
  target_id: string
}

export class AlbTargetGroupAttachment extends Resource<
  AlbTargetGroupAttachmentArguments,
  AlbTargetGroupAttachmentAttributes
> {
  kind = 'aws_alb_target_group_attachment'
  _outputAttrNames = ['availability_zone', 'id', 'port', 'target_group_arn', 'target_id'] as const
}
