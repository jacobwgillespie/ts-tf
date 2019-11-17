import {Resource} from '../Resource'

export interface VpcEndpointRouteTableAssociationArguments {
  id?: string
  route_table_id: string
  vpc_endpoint_id: string
}

export interface VpcEndpointRouteTableAssociationAttributes {
  id: string
  route_table_id: string
  vpc_endpoint_id: string
}

export class VpcEndpointRouteTableAssociation extends Resource<
  VpcEndpointRouteTableAssociationArguments,
  VpcEndpointRouteTableAssociationAttributes
> {
  kind = 'aws_vpc_endpoint_route_table_association'
  _outputAttrNames = ['id', 'route_table_id', 'vpc_endpoint_id'] as const
}
