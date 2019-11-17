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
  kind = 'aws_vpn_connection'
  _outputAttrNames = [
    'customer_gateway_configuration',
    'customer_gateway_id',
    'id',
    'routes',
    'static_routes_only',
    'tags',
    'transit_gateway_attachment_id',
    'transit_gateway_id',
    'tunnel1_address',
    'tunnel1_bgp_asn',
    'tunnel1_bgp_holdtime',
    'tunnel1_cgw_inside_address',
    'tunnel1_inside_cidr',
    'tunnel1_preshared_key',
    'tunnel1_vgw_inside_address',
    'tunnel2_address',
    'tunnel2_bgp_asn',
    'tunnel2_bgp_holdtime',
    'tunnel2_cgw_inside_address',
    'tunnel2_inside_cidr',
    'tunnel2_preshared_key',
    'tunnel2_vgw_inside_address',
    'type',
    'vgw_telemetry',
    'vpn_gateway_id',
  ] as const
}
