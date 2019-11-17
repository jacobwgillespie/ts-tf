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
  kind = 'aws_network_interface_attachment'
  _outputAttrNames = ['attachment_id', 'device_index', 'id', 'instance_id', 'network_interface_id', 'status'] as const
}
