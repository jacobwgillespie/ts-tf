import {Resource} from '../Resource'

export interface VpcPeeringConnectionAccepterArguments {
  auto_accept?: boolean
  id?: string
  tags?: {[key: string]: string}
  vpc_peering_connection_id: string
}

export interface VpcPeeringConnectionAccepterAttributes {
  accept_status: string
  auto_accept?: boolean
  id: string
  peer_owner_id: string
  peer_region: string
  peer_vpc_id: string
  tags?: {[key: string]: string}
  vpc_id: string
  vpc_peering_connection_id: string
}

export class VpcPeeringConnectionAccepter extends Resource<
  VpcPeeringConnectionAccepterArguments,
  VpcPeeringConnectionAccepterAttributes
> {
  kind = 'aws_vpc_peering_connection_accepter'
  _outputAttrNames = [
    'accept_status',
    'auto_accept',
    'id',
    'peer_owner_id',
    'peer_region',
    'peer_vpc_id',
    'tags',
    'vpc_id',
    'vpc_peering_connection_id',
  ] as const
}
