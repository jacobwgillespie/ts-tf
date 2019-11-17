import {Resource} from '../Resource'

export interface Ec2TransitGatewayVpcAttachmentArguments {
  dns_support?: string
  id?: string
  ipv6_support?: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
  transit_gateway_default_route_table_association?: boolean
  transit_gateway_default_route_table_propagation?: boolean
  transit_gateway_id: string
  vpc_id: string
}

export interface Ec2TransitGatewayVpcAttachmentAttributes {
  dns_support?: string
  id: string
  ipv6_support?: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
  transit_gateway_default_route_table_association?: boolean
  transit_gateway_default_route_table_propagation?: boolean
  transit_gateway_id: string
  vpc_id: string
  vpc_owner_id: string
}

export class Ec2TransitGatewayVpcAttachment extends Resource<
  Ec2TransitGatewayVpcAttachmentArguments,
  Ec2TransitGatewayVpcAttachmentAttributes
> {
  kind = 'aws_ec2_transit_gateway_vpc_attachment'
  _outputAttrNames = [
    'dns_support',
    'id',
    'ipv6_support',
    'subnet_ids',
    'tags',
    'transit_gateway_default_route_table_association',
    'transit_gateway_default_route_table_propagation',
    'transit_gateway_id',
    'vpc_id',
    'vpc_owner_id',
  ] as const
}
