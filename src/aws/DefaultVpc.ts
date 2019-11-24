import {Resource} from '../Resource'

export interface DefaultVpcArguments {
  enable_classiclink?: boolean
  enable_classiclink_dns_support?: boolean
  enable_dns_hostnames?: boolean
  enable_dns_support?: boolean
  id?: string
  tags?: {[key: string]: string}
}

export interface DefaultVpcAttributes {
  arn: string
  assign_generated_ipv6_cidr_block: boolean
  cidr_block: string
  default_network_acl_id: string
  default_route_table_id: string
  default_security_group_id: string
  dhcp_options_id: string
  enable_classiclink: boolean
  enable_classiclink_dns_support: boolean
  enable_dns_hostnames: boolean
  enable_dns_support?: boolean
  id: string
  instance_tenancy: string
  ipv6_association_id: string
  ipv6_cidr_block: string
  main_route_table_id: string
  owner_id: string
  tags?: {[key: string]: string}
}

export class DefaultVpc extends Resource<DefaultVpcArguments, DefaultVpcAttributes> {
  _kind = 'aws_default_vpc'

  get arn() {
    return this._attr('arn')
  }

  get assign_generated_ipv6_cidr_block() {
    return this._attr('assign_generated_ipv6_cidr_block')
  }

  get cidr_block() {
    return this._attr('cidr_block')
  }

  get default_network_acl_id() {
    return this._attr('default_network_acl_id')
  }

  get default_route_table_id() {
    return this._attr('default_route_table_id')
  }

  get default_security_group_id() {
    return this._attr('default_security_group_id')
  }

  get dhcp_options_id() {
    return this._attr('dhcp_options_id')
  }

  get enable_classiclink() {
    return this._attr('enable_classiclink')
  }

  get enable_classiclink_dns_support() {
    return this._attr('enable_classiclink_dns_support')
  }

  get enable_dns_hostnames() {
    return this._attr('enable_dns_hostnames')
  }

  get enable_dns_support() {
    return this._attr('enable_dns_support')
  }

  get id() {
    return this._attr('id')
  }

  get instance_tenancy() {
    return this._attr('instance_tenancy')
  }

  get ipv6_association_id() {
    return this._attr('ipv6_association_id')
  }

  get ipv6_cidr_block() {
    return this._attr('ipv6_cidr_block')
  }

  get main_route_table_id() {
    return this._attr('main_route_table_id')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get tags() {
    return this._attr('tags')
  }
}
