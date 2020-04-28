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
  _kind = 'aws_ec2_transit_gateway_route_table'

  get default_association_route_table() {
    return this._attr('default_association_route_table')
  }

  get default_propagation_route_table() {
    return this._attr('default_propagation_route_table')
  }

  get id() {
    return this._attr('id')
  }

  get tags() {
    return this._attr('tags')
  }

  get transit_gateway_id() {
    return this._attr('transit_gateway_id')
  }
}
