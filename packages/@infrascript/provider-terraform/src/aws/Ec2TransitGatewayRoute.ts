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
  _kind = 'aws_ec2_transit_gateway_route'

  get blackhole() {
    return this._attr('blackhole')
  }

  get destination_cidr_block() {
    return this._attr('destination_cidr_block')
  }

  get id() {
    return this._attr('id')
  }

  get transit_gateway_attachment_id() {
    return this._attr('transit_gateway_attachment_id')
  }

  get transit_gateway_route_table_id() {
    return this._attr('transit_gateway_route_table_id')
  }
}
