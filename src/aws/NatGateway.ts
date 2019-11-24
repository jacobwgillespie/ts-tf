import {Resource} from '../Resource'

export interface NatGatewayArguments {
  allocation_id: string
  id?: string
  subnet_id: string
  tags?: {[key: string]: string}
}

export interface NatGatewayAttributes {
  allocation_id: string
  id: string
  network_interface_id: string
  private_ip: string
  public_ip: string
  subnet_id: string
  tags?: {[key: string]: string}
}

export class NatGateway extends Resource<NatGatewayArguments, NatGatewayAttributes> {
  _kind = 'aws_nat_gateway'

  get allocation_id() {
    return this._attr('allocation_id')
  }

  get id() {
    return this._attr('id')
  }

  get network_interface_id() {
    return this._attr('network_interface_id')
  }

  get private_ip() {
    return this._attr('private_ip')
  }

  get public_ip() {
    return this._attr('public_ip')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }

  get tags() {
    return this._attr('tags')
  }
}
