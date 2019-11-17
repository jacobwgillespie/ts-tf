import {Resource} from '../Resource'

export interface DxPublicVirtualInterfaceArguments {
  address_family: string
  amazon_address?: string
  bgp_asn: number
  bgp_auth_key?: string
  connection_id: string
  customer_address?: string
  id?: string
  name: string
  route_filter_prefixes: Set<string>
  tags?: {[key: string]: string}
  vlan: number
}

export interface DxPublicVirtualInterfaceAttributes {
  address_family: string
  amazon_address: string
  arn: string
  aws_device: string
  bgp_asn: number
  bgp_auth_key: string
  connection_id: string
  customer_address: string
  id: string
  name: string
  route_filter_prefixes: Set<string>
  tags?: {[key: string]: string}
  vlan: number
}

export class DxPublicVirtualInterface extends Resource<
  DxPublicVirtualInterfaceArguments,
  DxPublicVirtualInterfaceAttributes
> {
  kind = 'aws_dx_public_virtual_interface'
  _outputAttrNames = [
    'address_family',
    'amazon_address',
    'arn',
    'aws_device',
    'bgp_asn',
    'bgp_auth_key',
    'connection_id',
    'customer_address',
    'id',
    'name',
    'route_filter_prefixes',
    'tags',
    'vlan',
  ] as const
}
