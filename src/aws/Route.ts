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
  kind = 'aws_route'
  _outputAttrNames = [
    'destination_cidr_block',
    'destination_ipv6_cidr_block',
    'destination_prefix_list_id',
    'egress_only_gateway_id',
    'gateway_id',
    'id',
    'instance_id',
    'instance_owner_id',
    'nat_gateway_id',
    'network_interface_id',
    'origin',
    'route_table_id',
    'state',
    'transit_gateway_id',
    'vpc_peering_connection_id',
  ] as const
}
