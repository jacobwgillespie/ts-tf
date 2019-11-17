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
  kind = 'aws_default_route_table'
  _outputAttrNames = [
    'default_route_table_id',
    'id',
    'owner_id',
    'propagating_vgws',
    'route',
    'tags',
    'vpc_id',
  ] as const
}
