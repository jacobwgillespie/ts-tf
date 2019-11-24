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
  _kind = 'aws_ec2_transit_gateway_route_table_association'

  get id() {
    return this._attr('id')
  }

  get resource_id() {
    return this._attr('resource_id')
  }

  get resource_type() {
    return this._attr('resource_type')
  }

  get transit_gateway_attachment_id() {
    return this._attr('transit_gateway_attachment_id')
  }

  get transit_gateway_route_table_id() {
    return this._attr('transit_gateway_route_table_id')
  }
}
