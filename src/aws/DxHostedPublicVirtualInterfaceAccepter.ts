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
  _kind = 'aws_dx_hosted_public_virtual_interface_accepter'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get tags() {
    return this._attr('tags')
  }

  get virtual_interface_id() {
    return this._attr('virtual_interface_id')
  }
}
