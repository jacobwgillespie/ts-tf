import {Resource} from '../Resource'

export interface Ec2TransitGatewayRouteTablePropagationArguments {
  id?: string
  transit_gateway_attachment_id: string
  transit_gateway_route_table_id: string
}

export interface Ec2TransitGatewayRouteTablePropagationAttributes {
  id: string
  resource_id: string
  resource_type: string
  transit_gateway_attachment_id: string
  transit_gateway_route_table_id: string
}

export class Ec2TransitGatewayRouteTablePropagation extends Resource<
  Ec2TransitGatewayRouteTablePropagationArguments,
  Ec2TransitGatewayRouteTablePropagationAttributes
> {
  kind = 'aws_ec2_transit_gateway_route_table_propagation'
  _outputAttrNames = [
    'id',
    'resource_id',
    'resource_type',
    'transit_gateway_attachment_id',
    'transit_gateway_route_table_id',
  ] as const
}
