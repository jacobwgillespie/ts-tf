import {Resource} from '../Resource'

export interface VpnGatewayRoutePropagationArguments {
  id?: string
  route_table_id: string
  vpn_gateway_id: string
}

export interface VpnGatewayRoutePropagationAttributes {
  id: string
  route_table_id: string
  vpn_gateway_id: string
}

export class VpnGatewayRoutePropagation extends Resource<
  VpnGatewayRoutePropagationArguments,
  VpnGatewayRoutePropagationAttributes
> {
  _kind = 'aws_vpn_gateway_route_propagation'

  get id() {
    return this._attr('id')
  }

  get route_table_id() {
    return this._attr('route_table_id')
  }

  get vpn_gateway_id() {
    return this._attr('vpn_gateway_id')
  }
}
