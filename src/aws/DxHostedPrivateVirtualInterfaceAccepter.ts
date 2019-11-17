import {Resource} from '../Resource'

export interface DxHostedPrivateVirtualInterfaceAccepterArguments {
  dx_gateway_id?: string
  id?: string
  tags?: {[key: string]: string}
  virtual_interface_id: string
  vpn_gateway_id?: string
}

export interface DxHostedPrivateVirtualInterfaceAccepterAttributes {
  arn: string
  dx_gateway_id?: string
  id: string
  tags?: {[key: string]: string}
  virtual_interface_id: string
  vpn_gateway_id?: string
}

export class DxHostedPrivateVirtualInterfaceAccepter extends Resource<
  DxHostedPrivateVirtualInterfaceAccepterArguments,
  DxHostedPrivateVirtualInterfaceAccepterAttributes
> {
  kind = 'aws_dx_hosted_private_virtual_interface_accepter'
  _outputAttrNames = ['arn', 'dx_gateway_id', 'id', 'tags', 'virtual_interface_id', 'vpn_gateway_id'] as const
}
