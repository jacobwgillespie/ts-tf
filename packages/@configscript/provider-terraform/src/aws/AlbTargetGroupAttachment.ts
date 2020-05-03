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
  _kind = 'aws_alb_target_group_attachment'

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
