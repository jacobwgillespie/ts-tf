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
  _kind = 'aws_main_route_table_association'

  get id() {
    return this._attr('id')
  }

  get original_route_table_id() {
    return this._attr('original_route_table_id')
  }

  get route_table_id() {
    return this._attr('route_table_id')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
