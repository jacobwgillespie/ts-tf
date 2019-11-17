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
  kind = 'aws_vpc_peering_connection_options'
  _outputAttrNames = ['id', 'vpc_peering_connection_id'] as const
}
