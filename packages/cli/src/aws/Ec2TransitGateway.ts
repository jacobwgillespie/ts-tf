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
  _kind = 'aws_ec2_transit_gateway'

  get amazon_side_asn() {
    return this._attr('amazon_side_asn')
  }

  get arn() {
    return this._attr('arn')
  }

  get association_default_route_table_id() {
    return this._attr('association_default_route_table_id')
  }

  get auto_accept_shared_attachments() {
    return this._attr('auto_accept_shared_attachments')
  }

  get default_route_table_association() {
    return this._attr('default_route_table_association')
  }

  get default_route_table_propagation() {
    return this._attr('default_route_table_propagation')
  }

  get description() {
    return this._attr('description')
  }

  get dns_support() {
    return this._attr('dns_support')
  }

  get id() {
    return this._attr('id')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get propagation_default_route_table_id() {
    return this._attr('propagation_default_route_table_id')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpn_ecmp_support() {
    return this._attr('vpn_ecmp_support')
  }
}
