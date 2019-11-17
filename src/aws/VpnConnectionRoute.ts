import {Resource} from '../Resource'

export interface VpnConnectionRouteArguments {
  destination_cidr_block: string
  id?: string
  vpn_connection_id: string
}

export interface VpnConnectionRouteAttributes {
  destination_cidr_block: string
  id: string
  vpn_connection_id: string
}

export class VpnConnectionRoute extends Resource<VpnConnectionRouteArguments, VpnConnectionRouteAttributes> {
  kind = 'aws_vpn_connection_route'
  _outputAttrNames = ['destination_cidr_block', 'id', 'vpn_connection_id'] as const
}
