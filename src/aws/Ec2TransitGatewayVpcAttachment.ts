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
  _kind = 'aws_ec2_transit_gateway_vpc_attachment'

  get dns_support() {
    return this._attr('dns_support')
  }

  get id() {
    return this._attr('id')
  }

  get ipv6_support() {
    return this._attr('ipv6_support')
  }

  get subnet_ids() {
    return this._attr('subnet_ids')
  }

  get tags() {
    return this._attr('tags')
  }

  get transit_gateway_default_route_table_association() {
    return this._attr('transit_gateway_default_route_table_association')
  }

  get transit_gateway_default_route_table_propagation() {
    return this._attr('transit_gateway_default_route_table_propagation')
  }

  get transit_gateway_id() {
    return this._attr('transit_gateway_id')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }

  get vpc_owner_id() {
    return this._attr('vpc_owner_id')
  }
}
