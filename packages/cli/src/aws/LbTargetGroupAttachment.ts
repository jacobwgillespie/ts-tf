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
  _kind = 'aws_lb_target_group_attachment'

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get id() {
    return this._attr('id')
  }

  get port() {
    return this._attr('port')
  }

  get target_group_arn() {
    return this._attr('target_group_arn')
  }

  get target_id() {
    return this._attr('target_id')
  }
}
