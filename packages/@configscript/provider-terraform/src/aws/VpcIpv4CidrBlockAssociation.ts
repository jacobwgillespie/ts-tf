import {Resource} from '../Resource'

export interface VpcIpv4CidrBlockAssociationArguments {
  cidr_block: string
  id?: string
  vpc_id: string
}

export interface VpcIpv4CidrBlockAssociationAttributes {
  cidr_block: string
  id: string
  vpc_id: string
}

export class VpcIpv4CidrBlockAssociation extends Resource<
  VpcIpv4CidrBlockAssociationArguments,
  VpcIpv4CidrBlockAssociationAttributes
> {
  _kind = 'aws_vpc_ipv4_cidr_block_association'

  get cidr_block() {
    return this._attr('cidr_block')
  }

  get id() {
    return this._attr('id')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
