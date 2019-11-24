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
  _kind = 'aws_dx_hosted_private_virtual_interface_accepter'

  get arn() {
    return this._attr('arn')
  }

  get dx_gateway_id() {
    return this._attr('dx_gateway_id')
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

  get vpn_gateway_id() {
    return this._attr('vpn_gateway_id')
  }
}
