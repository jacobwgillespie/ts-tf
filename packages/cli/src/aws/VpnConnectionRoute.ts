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
  _kind = 'aws_vpn_connection_route'

  get destination_cidr_block() {
    return this._attr('destination_cidr_block')
  }

  get id() {
    return this._attr('id')
  }

  get vpn_connection_id() {
    return this._attr('vpn_connection_id')
  }
}
