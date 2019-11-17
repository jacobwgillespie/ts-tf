import {Resource} from '../Resource'

export interface MainRouteTableAssociationArguments {
  id?: string
  route_table_id: string
  vpc_id: string
}

export interface MainRouteTableAssociationAttributes {
  id: string
  original_route_table_id: string
  route_table_id: string
  vpc_id: string
}

export class MainRouteTableAssociation extends Resource<
  MainRouteTableAssociationArguments,
  MainRouteTableAssociationAttributes
> {
  kind = 'aws_main_route_table_association'
  _outputAttrNames = ['id', 'original_route_table_id', 'route_table_id', 'vpc_id'] as const
}
