import {Resource} from '../Resource'

export interface NetworkInterfaceAttachmentArguments {
  device_index: number
  id?: string
  instance_id: string
  network_interface_id: string
}

export interface NetworkInterfaceAttachmentAttributes {
  attachment_id: string
  device_index: number
  id: string
  instance_id: string
  network_interface_id: string
  status: string
}

export class NetworkInterfaceAttachment extends Resource<
  NetworkInterfaceAttachmentArguments,
  NetworkInterfaceAttachmentAttributes
> {
  _kind = 'aws_network_interface_attachment'

  get attachment_id() {
    return this._attr('attachment_id')
  }

  get device_index() {
    return this._attr('device_index')
  }

  get id() {
    return this._attr('id')
  }

  get instance_id() {
    return this._attr('instance_id')
  }

  get network_interface_id() {
    return this._attr('network_interface_id')
  }

  get status() {
    return this._attr('status')
  }
}
