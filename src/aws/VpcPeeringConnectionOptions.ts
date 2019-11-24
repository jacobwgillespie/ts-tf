import {Resource} from '../Resource'

export interface VpcPeeringConnectionOptionsArguments {
  id?: string
  vpc_peering_connection_id: string
}

export interface VpcPeeringConnectionOptionsAttributes {
  id: string
  vpc_peering_connection_id: string
}

export class VpcPeeringConnectionOptions extends Resource<
  VpcPeeringConnectionOptionsArguments,
  VpcPeeringConnectionOptionsAttributes
> {
  _kind = 'aws_vpc_peering_connection_options'

  get id() {
    return this._attr('id')
  }

  get vpc_peering_connection_id() {
    return this._attr('vpc_peering_connection_id')
  }
}
