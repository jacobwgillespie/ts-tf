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
  _kind = 'aws_dx_bgp_peer'

  get address_family() {
    return this._attr('address_family')
  }

  get amazon_address() {
    return this._attr('amazon_address')
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

  get bgp_peer_id() {
    return this._attr('bgp_peer_id')
  }

  get bgp_status() {
    return this._attr('bgp_status')
  }

  get customer_address() {
    return this._attr('customer_address')
  }

  get id() {
    return this._attr('id')
  }

  get virtual_interface_id() {
    return this._attr('virtual_interface_id')
  }
}
