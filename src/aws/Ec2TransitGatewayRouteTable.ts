import {Resource} from '../Resource'

export interface Ec2TransitGatewayRouteTableArguments {
  id?: string
  tags?: {[key: string]: string}
  transit_gateway_id: string
}

export interface Ec2TransitGatewayRouteTableAttributes {
  default_association_route_table: boolean
  default_propagation_route_table: boolean
  id: string
  tags?: {[key: string]: string}
  transit_gateway_id: string
}

export class Ec2TransitGatewayRouteTable extends Resource<
  Ec2TransitGatewayRouteTableArguments,
  Ec2TransitGatewayRouteTableAttributes
> {
  kind = 'aws_ec2_transit_gateway_route_table'
  _outputAttrNames = [
    'default_association_route_table',
    'default_propagation_route_table',
    'id',
    'tags',
    'transit_gateway_id',
  ] as const
}
