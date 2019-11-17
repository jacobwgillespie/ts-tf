import {Resource} from '../Resource'

export interface VpcEndpointSubnetAssociationArguments {
  id?: string
  subnet_id: string
  vpc_endpoint_id: string
}

export interface VpcEndpointSubnetAssociationAttributes {
  id: string
  subnet_id: string
  vpc_endpoint_id: string
}

export class VpcEndpointSubnetAssociation extends Resource<
  VpcEndpointSubnetAssociationArguments,
  VpcEndpointSubnetAssociationAttributes
> {
  kind = 'aws_vpc_endpoint_subnet_association'
  _outputAttrNames = ['id', 'subnet_id', 'vpc_endpoint_id'] as const
}
