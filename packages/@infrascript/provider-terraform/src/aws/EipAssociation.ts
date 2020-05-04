import {Resource} from '../Resource'

export interface EipAssociationArguments {
  allocation_id?: string
  allow_reassociation?: boolean
  id?: string
  instance_id?: string
  network_interface_id?: string
  private_ip_address?: string
  public_ip?: string
}

export interface EipAssociationAttributes {
  allocation_id: string
  allow_reassociation?: boolean
  id: string
  instance_id: string
  network_interface_id: string
  private_ip_address: string
  public_ip: string
}

export class EipAssociation extends Resource<EipAssociationArguments, EipAssociationAttributes> {
  _kind = 'aws_eip_association'

  get allocation_id() {
    return this._attr('allocation_id')
  }

  get allow_reassociation() {
    return this._attr('allow_reassociation')
  }

  get id() {
    return this._attr('id')
  }

  get instance_id() {
    return this._attr('instance_id')
  }

  get network_interface_id() {
    return this._attr('network_interface_id')
  }

  get private_ip_address() {
    return this._attr('private_ip_address')
  }

  get public_ip() {
    return this._attr('public_ip')
  }
}
