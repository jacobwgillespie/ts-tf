import {Resource} from '../Resource'

export interface DxHostedPublicVirtualInterfaceArguments {
  address_family: string
  amazon_address?: string
  bgp_asn: number
  bgp_auth_key?: string
  connection_id: string
  customer_address?: string
  id?: string
  name: string
  owner_account_id: string
  route_filter_prefixes: Set<string>
  vlan: number
}

export interface DxHostedPublicVirtualInterfaceAttributes {
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
  owner_account_id: string
  route_filter_prefixes: Set<string>
  vlan: number
}

export class DxHostedPublicVirtualInterface extends Resource<
  DxHostedPublicVirtualInterfaceArguments,
  DxHostedPublicVirtualInterfaceAttributes
> {
  kind = 'aws_dx_hosted_public_virtual_interface'
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
    'owner_account_id',
    'route_filter_prefixes',
    'vlan',
  ] as const
}
