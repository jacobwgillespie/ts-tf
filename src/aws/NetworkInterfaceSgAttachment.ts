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
  kind = 'aws_network_interface_sg_attachment'
  _outputAttrNames = ['id', 'network_interface_id', 'security_group_id'] as const
}
