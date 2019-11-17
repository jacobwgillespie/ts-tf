import {Resource} from '../Resource'

export interface RouteTableAssociationArguments {
  id?: string
  route_table_id: string
  subnet_id: string
}

export interface RouteTableAssociationAttributes {
  id: string
  route_table_id: string
  subnet_id: string
}

export class RouteTableAssociation extends Resource<RouteTableAssociationArguments, RouteTableAssociationAttributes> {
  kind = 'aws_route_table_association'
  _outputAttrNames = ['id', 'route_table_id', 'subnet_id'] as const
}
