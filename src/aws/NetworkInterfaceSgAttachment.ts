import {Resource} from '../Resource'

export interface NetworkInterfaceSgAttachmentArguments {
  id?: string
  network_interface_id: string
  security_group_id: string
}

export interface NetworkInterfaceSgAttachmentAttributes {
  id: string
  network_interface_id: string
  security_group_id: string
}

export class NetworkInterfaceSgAttachment extends Resource<
  NetworkInterfaceSgAttachmentArguments,
  NetworkInterfaceSgAttachmentAttributes
> {
  _kind = 'aws_network_interface_sg_attachment'

  get id() {
    return this._attr('id')
  }

  get network_interface_id() {
    return this._attr('network_interface_id')
  }

  get security_group_id() {
    return this._attr('security_group_id')
  }
}
