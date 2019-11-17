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
  kind = 'aws_dx_private_virtual_interface'
  _outputAttrNames = [
    'address_family',
    'amazon_address',
    'arn',
    'aws_device',
    'bgp_asn',
    'bgp_auth_key',
    'connection_id',
    'customer_address',
    'dx_gateway_id',
    'id',
    'jumbo_frame_capable',
    'mtu',
    'name',
    'tags',
    'vlan',
    'vpn_gateway_id',
  ] as const
}
