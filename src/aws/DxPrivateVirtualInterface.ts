import {Resource} from '../Resource'

export interface DxPrivateVirtualInterfaceArguments {
  address_family: string
  amazon_address?: string
  bgp_asn: number
  bgp_auth_key?: string
  connection_id: string
  customer_address?: string
  dx_gateway_id?: string
  id?: string
  mtu?: number
  name: string
  tags?: {[key: string]: string}
  vlan: number
  vpn_gateway_id?: string
}

export interface DxPrivateVirtualInterfaceAttributes {
  address_family: string
  amazon_address: string
  arn: string
  aws_device: string
  bgp_asn: number
  bgp_auth_key: string
  connection_id: string
  customer_address: string
  dx_gateway_id?: string
  id: string
  jumbo_frame_capable: boolean
  mtu?: number
  name: string
  tags?: {[key: string]: string}
  vlan: number
  vpn_gateway_id?: string
}

export class DxPrivateVirtualInterface extends Resource<
  DxPrivateVirtualInterfaceArguments,
  DxPrivateVirtualInterfaceAttributes
> {
  _kind = 'aws_dx_private_virtual_interface'

  get address_family() {
    return this._attr('address_family')
  }

  get amazon_address() {
    return this._attr('amazon_address')
  }

  get arn() {
    return this._attr('arn')
  }

  get aws_device() {
    return this._attr('aws_device')
  }

  get bgp_asn() {
    return this._attr('bgp_asn')
  }

  get bgp_auth_key() {
    return this._attr('bgp_auth_key')
  }

  get connection_id() {
    return this._attr('connection_id')
  }

  get customer_address() {
    return this._attr('customer_address')
  }

  get dx_gateway_id() {
    return this._attr('dx_gateway_id')
  }

  get id() {
    return this._attr('id')
  }

  get jumbo_frame_capable() {
    return this._attr('jumbo_frame_capable')
  }

  get mtu() {
    return this._attr('mtu')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }

  get vlan() {
    return this._attr('vlan')
  }

  get vpn_gateway_id() {
    return this._attr('vpn_gateway_id')
  }
}
