import {Resource} from '../Resource'

export interface Ec2TransitGatewayArguments {
  amazon_side_asn?: number
  auto_accept_shared_attachments?: string
  default_route_table_association?: string
  default_route_table_propagation?: string
  description?: string
  dns_support?: string
  id?: string
  tags?: {[key: string]: string}
  vpn_ecmp_support?: string
}

export interface Ec2TransitGatewayAttributes {
  amazon_side_asn?: number
  arn: string
  association_default_route_table_id: string
  auto_accept_shared_attachments?: string
  default_route_table_association?: string
  default_route_table_propagation?: string
  description?: string
  dns_support?: string
  id: string
  owner_id: string
  propagation_default_route_table_id: string
  tags?: {[key: string]: string}
  vpn_ecmp_support?: string
}

export class Ec2TransitGateway extends Resource<Ec2TransitGatewayArguments, Ec2TransitGatewayAttributes> {
  kind = 'aws_ec2_transit_gateway'
  _outputAttrNames = [
    'amazon_side_asn',
    'arn',
    'association_default_route_table_id',
    'auto_accept_shared_attachments',
    'default_route_table_association',
    'default_route_table_propagation',
    'description',
    'dns_support',
    'id',
    'owner_id',
    'propagation_default_route_table_id',
    'tags',
    'vpn_ecmp_support',
  ] as const
}
