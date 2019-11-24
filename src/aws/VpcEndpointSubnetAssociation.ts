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
  _kind = 'aws_vpc_endpoint_subnet_association'

  get id() {
    return this._attr('id')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }

  get vpc_endpoint_id() {
    return this._attr('vpc_endpoint_id')
  }
}
