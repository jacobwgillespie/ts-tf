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
  _kind = 'aws_lightsail_static_ip_attachment'

  get id() {
    return this._attr('id')
  }

  get instance_name() {
    return this._attr('instance_name')
  }

  get static_ip_name() {
    return this._attr('static_ip_name')
  }
}
