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
  kind = 'aws_elb_attachment'
  _outputAttrNames = ['elb', 'id', 'instance'] as const
}
