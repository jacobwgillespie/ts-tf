import {Resource} from '../Resource'

export interface Ec2TransitGatewayVpcAttachmentAccepterArguments {
  id?: string
  tags?: {[key: string]: string}
  transit_gateway_attachment_id: string
  transit_gateway_default_route_table_association?: boolean
  transit_gateway_default_route_table_propagation?: boolean
}

export interface Ec2TransitGatewayVpcAttachmentAccepterAttributes {
  dns_support: string
  id: string
  ipv6_support: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
  transit_gateway_attachment_id: string
  transit_gateway_default_route_table_association?: boolean
  transit_gateway_default_route_table_propagation?: boolean
  transit_gateway_id: string
  vpc_id: string
  vpc_owner_id: string
}

export class Ec2TransitGatewayVpcAttachmentAccepter extends Resource<
  Ec2TransitGatewayVpcAttachmentAccepterArguments,
  Ec2TransitGatewayVpcAttachmentAccepterAttributes
> {
  kind = 'aws_ec2_transit_gateway_vpc_attachment_accepter'
  _outputAttrNames = [
    'dns_support',
    'id',
    'ipv6_support',
    'subnet_ids',
    'tags',
    'transit_gateway_attachment_id',
    'transit_gateway_default_route_table_association',
    'transit_gateway_default_route_table_propagation',
    'transit_gateway_id',
    'vpc_id',
    'vpc_owner_id',
  ] as const
}
