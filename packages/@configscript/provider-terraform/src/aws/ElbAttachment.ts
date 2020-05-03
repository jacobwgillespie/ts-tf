import {Resource} from '../Resource'

export interface ElbAttachmentArguments {
  elb: string
  id?: string
  instance: string
}

export interface ElbAttachmentAttributes {
  elb: string
  id: string
  instance: string
}

export class ElbAttachment extends Resource<ElbAttachmentArguments, ElbAttachmentAttributes> {
  _kind = 'aws_elb_attachment'

  get elb() {
    return this._attr('elb')
  }

  get id() {
    return this._attr('id')
  }

  get instance() {
    return this._attr('instance')
  }
}
