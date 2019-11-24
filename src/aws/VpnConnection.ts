import {Resource} from '../Resource'

export interface VpnConnectionArguments {
  customer_gateway_id: string
  id?: string
  static_routes_only?: boolean
  tags?: {[key: string]: string}
  transit_gateway_id?: string
  tunnel1_inside_cidr?: string
  tunnel1_preshared_key?: string
  tunnel2_inside_cidr?: string
  tunnel2_preshared_key?: string
  type: string
  vpn_gateway_id?: string
}

export interface VpnConnectionAttributes {
  customer_gateway_configuration: string
  customer_gateway_id: string
  id: string
  routes: Set<{destination_cidr_block: string; source: string; state: string}>
  static_routes_only: boolean
  tags?: {[key: string]: string}
  transit_gateway_attachment_id: string
  transit_gateway_id?: string
  tunnel1_address: string
  tunnel1_bgp_asn: string
  tunnel1_bgp_holdtime: number
  tunnel1_cgw_inside_address: string
  tunnel1_inside_cidr: string
  tunnel1_preshared_key: string
  tunnel1_vgw_inside_address: string
  tunnel2_address: string
  tunnel2_bgp_asn: string
  tunnel2_bgp_holdtime: number
  tunnel2_cgw_inside_address: string
  tunnel2_inside_cidr: string
  tunnel2_preshared_key: string
  tunnel2_vgw_inside_address: string
  type: string
  vgw_telemetry: Set<{
    accepted_route_count: number
    last_status_change: string
    outside_ip_address: string
    status: string
    status_message: string
  }>
  vpn_gateway_id?: string
}

export class VpnConnection extends Resource<VpnConnectionArguments, VpnConnectionAttributes> {
  _kind = 'aws_vpn_connection'

  get customer_gateway_configuration() {
    return this._attr('customer_gateway_configuration')
  }

  get customer_gateway_id() {
    return this._attr('customer_gateway_id')
  }

  get id() {
    return this._attr('id')
  }

  get routes() {
    return this._attr('routes')
  }

  get static_routes_only() {
    return this._attr('static_routes_only')
  }

  get tags() {
    return this._attr('tags')
  }

  get transit_gateway_attachment_id() {
    return this._attr('transit_gateway_attachment_id')
  }

  get transit_gateway_id() {
    return this._attr('transit_gateway_id')
  }

  get tunnel1_address() {
    return this._attr('tunnel1_address')
  }

  get tunnel1_bgp_asn() {
    return this._attr('tunnel1_bgp_asn')
  }

  get tunnel1_bgp_holdtime() {
    return this._attr('tunnel1_bgp_holdtime')
  }

  get tunnel1_cgw_inside_address() {
    return this._attr('tunnel1_cgw_inside_address')
  }

  get tunnel1_inside_cidr() {
    return this._attr('tunnel1_inside_cidr')
  }

  get tunnel1_preshared_key() {
    return this._attr('tunnel1_preshared_key')
  }

  get tunnel1_vgw_inside_address() {
    return this._attr('tunnel1_vgw_inside_address')
  }

  get tunnel2_address() {
    return this._attr('tunnel2_address')
  }

  get tunnel2_bgp_asn() {
    return this._attr('tunnel2_bgp_asn')
  }

  get tunnel2_bgp_holdtime() {
    return this._attr('tunnel2_bgp_holdtime')
  }

  get tunnel2_cgw_inside_address() {
    return this._attr('tunnel2_cgw_inside_address')
  }

  get tunnel2_inside_cidr() {
    return this._attr('tunnel2_inside_cidr')
  }

  get tunnel2_preshared_key() {
    return this._attr('tunnel2_preshared_key')
  }

  get tunnel2_vgw_inside_address() {
    return this._attr('tunnel2_vgw_inside_address')
  }

  get type() {
    return this._attr('type')
  }

  get vgw_telemetry() {
    return this._attr('vgw_telemetry')
  }

  get vpn_gateway_id() {
    return this._attr('vpn_gateway_id')
  }
}
