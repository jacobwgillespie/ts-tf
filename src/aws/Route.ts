import {Resource} from '../Resource'

export interface RouteArguments {
  destination_cidr_block?: string
  destination_ipv6_cidr_block?: string
  egress_only_gateway_id?: string
  gateway_id?: string
  id?: string
  instance_id?: string
  nat_gateway_id?: string
  network_interface_id?: string
  route_table_id: string
  transit_gateway_id?: string
  vpc_peering_connection_id?: string
}

export interface RouteAttributes {
  destination_cidr_block?: string
  destination_ipv6_cidr_block?: string
  destination_prefix_list_id: string
  egress_only_gateway_id: string
  gateway_id: string
  id: string
  instance_id: string
  instance_owner_id: string
  nat_gateway_id: string
  network_interface_id: string
  origin: string
  route_table_id: string
  state: string
  transit_gateway_id?: string
  vpc_peering_connection_id?: string
}

export class Route extends Resource<RouteArguments, RouteAttributes> {
  _kind = 'aws_route'

  get destination_cidr_block() {
    return this._attr('destination_cidr_block')
  }

  get destination_ipv6_cidr_block() {
    return this._attr('destination_ipv6_cidr_block')
  }

  get destination_prefix_list_id() {
    return this._attr('destination_prefix_list_id')
  }

  get egress_only_gateway_id() {
    return this._attr('egress_only_gateway_id')
  }

  get gateway_id() {
    return this._attr('gateway_id')
  }

  get id() {
    return this._attr('id')
  }

  get instance_id() {
    return this._attr('instance_id')
  }

  get instance_owner_id() {
    return this._attr('instance_owner_id')
  }

  get nat_gateway_id() {
    return this._attr('nat_gateway_id')
  }

  get network_interface_id() {
    return this._attr('network_interface_id')
  }

  get origin() {
    return this._attr('origin')
  }

  get route_table_id() {
    return this._attr('route_table_id')
  }

  get state() {
    return this._attr('state')
  }

  get transit_gateway_id() {
    return this._attr('transit_gateway_id')
  }

  get vpc_peering_connection_id() {
    return this._attr('vpc_peering_connection_id')
  }
}
