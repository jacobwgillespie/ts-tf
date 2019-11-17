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
  kind = 'aws_vpn_gateway_route_propagation'
  _outputAttrNames = ['id', 'route_table_id', 'vpn_gateway_id'] as const
}
