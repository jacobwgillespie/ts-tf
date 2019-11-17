import {Resource} from '../Resource'

export interface DxHostedPublicVirtualInterfaceAccepterArguments {
  id?: string
  tags?: {[key: string]: string}
  virtual_interface_id: string
}

export interface DxHostedPublicVirtualInterfaceAccepterAttributes {
  arn: string
  id: string
  tags?: {[key: string]: string}
  virtual_interface_id: string
}

export class DxHostedPublicVirtualInterfaceAccepter extends Resource<
  DxHostedPublicVirtualInterfaceAccepterArguments,
  DxHostedPublicVirtualInterfaceAccepterAttributes
> {
  kind = 'aws_dx_hosted_public_virtual_interface_accepter'
  _outputAttrNames = ['arn', 'id', 'tags', 'virtual_interface_id'] as const
}
