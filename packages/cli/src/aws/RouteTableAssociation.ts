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
  _kind = 'aws_route_table_association'

  get id() {
    return this._attr('id')
  }

  get route_table_id() {
    return this._attr('route_table_id')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }
}
