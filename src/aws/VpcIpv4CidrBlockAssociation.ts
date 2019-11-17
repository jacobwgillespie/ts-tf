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
  kind = 'aws_vpc_ipv4_cidr_block_association'
  _outputAttrNames = ['cidr_block', 'id', 'vpc_id'] as const
}
