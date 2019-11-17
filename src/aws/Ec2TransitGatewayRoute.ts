import {Resource} from '../Resource'

export interface Ec2TransitGatewayRouteArguments {
  blackhole?: boolean
  destination_cidr_block: string
  id?: string
  transit_gateway_attachment_id?: string
  transit_gateway_route_table_id: string
}

export interface Ec2TransitGatewayRouteAttributes {
  blackhole?: boolean
  destination_cidr_block: string
  id: string
  transit_gateway_attachment_id?: string
  transit_gateway_route_table_id: string
}

export class Ec2TransitGatewayRoute extends Resource<
  Ec2TransitGatewayRouteArguments,
  Ec2TransitGatewayRouteAttributes
> {
  kind = 'aws_ec2_transit_gateway_route'
  _outputAttrNames = [
    'blackhole',
    'destination_cidr_block',
    'id',
    'transit_gateway_attachment_id',
    'transit_gateway_route_table_id',
  ] as const
}
