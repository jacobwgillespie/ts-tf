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
  kind = 'aws_default_vpc'
  _outputAttrNames = [
    'arn',
    'assign_generated_ipv6_cidr_block',
    'cidr_block',
    'default_network_acl_id',
    'default_route_table_id',
    'default_security_group_id',
    'dhcp_options_id',
    'enable_classiclink',
    'enable_classiclink_dns_support',
    'enable_dns_hostnames',
    'enable_dns_support',
    'id',
    'instance_tenancy',
    'ipv6_association_id',
    'ipv6_cidr_block',
    'main_route_table_id',
    'owner_id',
    'tags',
  ] as const
}
