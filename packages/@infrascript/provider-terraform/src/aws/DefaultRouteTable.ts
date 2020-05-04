import {Resource} from '../Resource'

export interface DefaultRouteTableArguments {
  default_route_table_id: string
  id?: string
  propagating_vgws?: Set<string>
  route?: Set<{
    cidr_block: string
    egress_only_gateway_id: string
    gateway_id: string
    instance_id: string
    ipv6_cidr_block: string
    nat_gateway_id: string
    network_interface_id: string
    transit_gateway_id: string
    vpc_peering_connection_id: string
  }>
  tags?: {[key: string]: string}
}

export interface DefaultRouteTableAttributes {
  default_route_table_id: string
  id: string
  owner_id: string
  propagating_vgws?: Set<string>
  route: Set<{
    cidr_block: string
    egress_only_gateway_id: string
    gateway_id: string
    instance_id: string
    ipv6_cidr_block: string
    nat_gateway_id: string
    network_interface_id: string
    transit_gateway_id: string
    vpc_peering_connection_id: string
  }>
  tags?: {[key: string]: string}
  vpc_id: string
}

export class DefaultRouteTable extends Resource<DefaultRouteTableArguments, DefaultRouteTableAttributes> {
  _kind = 'aws_default_route_table'

  get default_route_table_id() {
    return this._attr('default_route_table_id')
  }

  get id() {
    return this._attr('id')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get propagating_vgws() {
    return this._attr('propagating_vgws')
  }

  get route() {
    return this._attr('route')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
