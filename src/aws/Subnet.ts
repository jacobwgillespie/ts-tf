import {Resource} from '../Resource'

export interface SubnetArguments {
  assign_ipv6_address_on_creation?: boolean
  availability_zone?: string
  availability_zone_id?: string
  cidr_block: string
  id?: string
  ipv6_cidr_block?: string
  map_public_ip_on_launch?: boolean
  tags?: {[key: string]: string}
  vpc_id: string
}

export interface SubnetAttributes {
  arn: string
  assign_ipv6_address_on_creation?: boolean
  availability_zone: string
  availability_zone_id: string
  cidr_block: string
  id: string
  ipv6_cidr_block: string
  ipv6_cidr_block_association_id: string
  map_public_ip_on_launch?: boolean
  owner_id: string
  tags?: {[key: string]: string}
  vpc_id: string
}

export class Subnet extends Resource<SubnetArguments, SubnetAttributes> {
  kind = 'aws_subnet'
  _outputAttrNames = [
    'arn',
    'assign_ipv6_address_on_creation',
    'availability_zone',
    'availability_zone_id',
    'cidr_block',
    'id',
    'ipv6_cidr_block',
    'ipv6_cidr_block_association_id',
    'map_public_ip_on_launch',
    'owner_id',
    'tags',
    'vpc_id',
  ] as const
}
