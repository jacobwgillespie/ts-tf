import {Resource} from '../Resource'

export interface DxTransitVirtualInterfaceArguments {
  address_family: string
  amazon_address?: string
  bgp_asn: number
  bgp_auth_key?: string
  connection_id: string
  customer_address?: string
  dx_gateway_id: string
  id?: string
  mtu?: number
  name: string
  tags?: {[key: string]: string}
  vlan: number
}

export interface DxTransitVirtualInterfaceAttributes {
  address_family: string
  amazon_address: string
  arn: string
  aws_device: string
  bgp_asn: number
  bgp_auth_key: string
  connection_id: string
  customer_address: string
  dx_gateway_id: string
  id: string
  jumbo_frame_capable: boolean
  mtu?: number
  name: string
  tags?: {[key: string]: string}
  vlan: number
}

export class DxTransitVirtualInterface extends Resource<
  DxTransitVirtualInterfaceArguments,
  DxTransitVirtualInterfaceAttributes
> {
  kind = 'aws_dx_transit_virtual_interface'
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
  ] as const
}
