import {Resource} from '../Resource'

export interface NetworkInterfaceArguments {
  description?: string
  id?: string
  private_ip?: string
  private_ips?: Set<string>
  private_ips_count?: number
  security_groups?: Set<string>
  source_dest_check?: boolean
  subnet_id: string
  tags?: {[key: string]: string}
}

export interface NetworkInterfaceAttributes {
  description?: string
  id: string
  private_dns_name: string
  private_ip: string
  private_ips: Set<string>
  private_ips_count: number
  security_groups: Set<string>
  source_dest_check?: boolean
  subnet_id: string
  tags?: {[key: string]: string}
}

export class NetworkInterface extends Resource<NetworkInterfaceArguments, NetworkInterfaceAttributes> {
  _kind = 'aws_network_interface'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get private_dns_name() {
    return this._attr('private_dns_name')
  }

  get private_ip() {
    return this._attr('private_ip')
  }

  get private_ips() {
    return this._attr('private_ips')
  }

  get private_ips_count() {
    return this._attr('private_ips_count')
  }

  get security_groups() {
    return this._attr('security_groups')
  }

  get source_dest_check() {
    return this._attr('source_dest_check')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }

  get tags() {
    return this._attr('tags')
  }
}
