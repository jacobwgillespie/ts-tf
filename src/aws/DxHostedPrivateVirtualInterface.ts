import {Resource} from '../Resource'

export interface DxHostedPrivateVirtualInterfaceArguments {
  address_family: string
  amazon_address?: string
  bgp_asn: number
  bgp_auth_key?: string
  connection_id: string
  customer_address?: string
  id?: string
  mtu?: number
  name: string
  owner_account_id: string
  vlan: number
}

export interface DxHostedPrivateVirtualInterfaceAttributes {
  address_family: string
  amazon_address: string
  arn: string
  aws_device: string
  bgp_asn: number
  bgp_auth_key: string
  connection_id: string
  customer_address: string
  id: string
  jumbo_frame_capable: boolean
  mtu?: number
  name: string
  owner_account_id: string
  vlan: number
}

export class DxHostedPrivateVirtualInterface extends Resource<
  DxHostedPrivateVirtualInterfaceArguments,
  DxHostedPrivateVirtualInterfaceAttributes
> {
  _kind = 'aws_dx_hosted_private_virtual_interface'

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

  get owner_account_id() {
    return this._attr('owner_account_id')
  }

  get vlan() {
    return this._attr('vlan')
  }
}
