import {Resource} from '../Resource'

export interface DxBgpPeerArguments {
  address_family: string
  amazon_address?: string
  bgp_asn: number
  bgp_auth_key?: string
  customer_address?: string
  id?: string
  virtual_interface_id: string
}

export interface DxBgpPeerAttributes {
  address_family: string
  amazon_address: string
  aws_device: string
  bgp_asn: number
  bgp_auth_key: string
  bgp_peer_id: string
  bgp_status: string
  customer_address: string
  id: string
  virtual_interface_id: string
}

export class DxBgpPeer extends Resource<DxBgpPeerArguments, DxBgpPeerAttributes> {
  kind = 'aws_dx_bgp_peer'
  _outputAttrNames = [
    'address_family',
    'amazon_address',
    'aws_device',
    'bgp_asn',
    'bgp_auth_key',
    'bgp_peer_id',
    'bgp_status',
    'customer_address',
    'id',
    'virtual_interface_id',
  ] as const
}
