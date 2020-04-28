import {Resource} from '../Resource'

export interface EipArguments {
  associate_with_private_ip?: string
  id?: string
  instance?: string
  network_interface?: string
  public_ipv4_pool?: string
  tags?: {[key: string]: string}
  vpc?: boolean
}

export interface EipAttributes {
  allocation_id: string
  associate_with_private_ip?: string
  association_id: string
  domain: string
  id: string
  instance: string
  network_interface: string
  private_dns: string
  private_ip: string
  public_dns: string
  public_ip: string
  public_ipv4_pool: string
  tags?: {[key: string]: string}
  vpc: boolean
}

export class Eip extends Resource<EipArguments, EipAttributes> {
  _kind = 'aws_eip'

  get allocation_id() {
    return this._attr('allocation_id')
  }

  get associate_with_private_ip() {
    return this._attr('associate_with_private_ip')
  }

  get association_id() {
    return this._attr('association_id')
  }

  get domain() {
    return this._attr('domain')
  }

  get id() {
    return this._attr('id')
  }

  get instance() {
    return this._attr('instance')
  }

  get network_interface() {
    return this._attr('network_interface')
  }

  get private_dns() {
    return this._attr('private_dns')
  }

  get private_ip() {
    return this._attr('private_ip')
  }

  get public_dns() {
    return this._attr('public_dns')
  }

  get public_ip() {
    return this._attr('public_ip')
  }

  get public_ipv4_pool() {
    return this._attr('public_ipv4_pool')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc() {
    return this._attr('vpc')
  }
}
