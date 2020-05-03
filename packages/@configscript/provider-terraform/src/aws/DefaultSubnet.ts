import {Resource} from '../Resource'

export interface DefaultSubnetArguments {
  availability_zone: string
  id?: string
  map_public_ip_on_launch?: boolean
  tags?: {[key: string]: string}
}

export interface DefaultSubnetAttributes {
  arn: string
  assign_ipv6_address_on_creation: boolean
  availability_zone: string
  availability_zone_id: string
  cidr_block: string
  id: string
  ipv6_cidr_block: string
  ipv6_cidr_block_association_id: string
  map_public_ip_on_launch: boolean
  owner_id: string
  tags?: {[key: string]: string}
  vpc_id: string
}

export class DefaultSubnet extends Resource<DefaultSubnetArguments, DefaultSubnetAttributes> {
  _kind = 'aws_default_subnet'

  get arn() {
    return this._attr('arn')
  }

  get assign_ipv6_address_on_creation() {
    return this._attr('assign_ipv6_address_on_creation')
  }

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get availability_zone_id() {
    return this._attr('availability_zone_id')
  }

  get cidr_block() {
    return this._attr('cidr_block')
  }

  get id() {
    return this._attr('id')
  }

  get ipv6_cidr_block() {
    return this._attr('ipv6_cidr_block')
  }

  get ipv6_cidr_block_association_id() {
    return this._attr('ipv6_cidr_block_association_id')
  }

  get map_public_ip_on_launch() {
    return this._attr('map_public_ip_on_launch')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
