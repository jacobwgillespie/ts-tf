import {Resource} from '../Resource'

export interface Ec2TransitGatewayRouteTableAssociationArguments {
  id?: string
  transit_gateway_attachment_id: string
  transit_gateway_route_table_id: string
}

export interface Ec2TransitGatewayRouteTableAssociationAttributes {
  id: string
  resource_id: string
  resource_type: string
  transit_gateway_attachment_id: string
  transit_gateway_route_table_id: string
}

export class Ec2TransitGatewayRouteTableAssociation extends Resource<
  Ec2TransitGatewayRouteTableAssociationArguments,
  Ec2TransitGatewayRouteTableAssociationAttributes
> {
  kind = 'aws_ec2_transit_gateway_route_table_association'
  _outputAttrNames = [
    'id',
    'resource_id',
    'resource_type',
    'transit_gateway_attachment_id',
    'transit_gateway_route_table_id',
  ] as const
}
