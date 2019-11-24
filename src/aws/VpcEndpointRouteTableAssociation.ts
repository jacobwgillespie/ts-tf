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
  _kind = 'aws_vpc_endpoint_route_table_association'

  get id() {
    return this._attr('id')
  }

  get route_table_id() {
    return this._attr('route_table_id')
  }

  get vpc_endpoint_id() {
    return this._attr('vpc_endpoint_id')
  }
}
