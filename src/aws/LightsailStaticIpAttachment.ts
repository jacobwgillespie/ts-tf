import {Resource} from '../Resource'

export interface LightsailStaticIpAttachmentArguments {
  id?: string
  instance_name: string
  static_ip_name: string
}

export interface LightsailStaticIpAttachmentAttributes {
  id: string
  instance_name: string
  static_ip_name: string
}

export class LightsailStaticIpAttachment extends Resource<
  LightsailStaticIpAttachmentArguments,
  LightsailStaticIpAttachmentAttributes
> {
  kind = 'aws_lightsail_static_ip_attachment'
  _outputAttrNames = ['id', 'instance_name', 'static_ip_name'] as const
}
