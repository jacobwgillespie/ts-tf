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
  _kind = 'aws_vpc_peering_connection_accepter'

  get accept_status() {
    return this._attr('accept_status')
  }

  get auto_accept() {
    return this._attr('auto_accept')
  }

  get id() {
    return this._attr('id')
  }

  get peer_owner_id() {
    return this._attr('peer_owner_id')
  }

  get peer_region() {
    return this._attr('peer_region')
  }

  get peer_vpc_id() {
    return this._attr('peer_vpc_id')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }

  get vpc_peering_connection_id() {
    return this._attr('vpc_peering_connection_id')
  }
}
