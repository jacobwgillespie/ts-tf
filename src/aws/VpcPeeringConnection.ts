import {Resource} from '../Resource'

export interface VpcPeeringConnectionArguments {
  auto_accept?: boolean
  id?: string
  peer_owner_id?: string
  peer_region?: string
  peer_vpc_id: string
  tags?: {[key: string]: string}
  vpc_id: string
}

export interface VpcPeeringConnectionAttributes {
  accept_status: string
  auto_accept?: boolean
  id: string
  peer_owner_id: string
  peer_region: string
  peer_vpc_id: string
  tags?: {[key: string]: string}
  vpc_id: string
}

export class VpcPeeringConnection extends Resource<VpcPeeringConnectionArguments, VpcPeeringConnectionAttributes> {
  kind = 'aws_vpc_peering_connection'
  _outputAttrNames = [
    'accept_status',
    'auto_accept',
    'id',
    'peer_owner_id',
    'peer_region',
    'peer_vpc_id',
    'tags',
    'vpc_id',
  ] as const
}
