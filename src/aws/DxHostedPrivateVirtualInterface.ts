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
  kind = 'aws_dx_hosted_private_virtual_interface'
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
    'jumbo_frame_capable',
    'mtu',
    'name',
    'owner_account_id',
    'vlan',
  ] as const
}
