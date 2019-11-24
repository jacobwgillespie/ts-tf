import {Resource} from '../Resource'

export interface VpcDhcpOptionsArguments {
  domain_name?: string
  domain_name_servers?: Array<string>
  id?: string
  netbios_name_servers?: Array<string>
  netbios_node_type?: string
  ntp_servers?: Array<string>
  tags?: {[key: string]: string}
}

export interface VpcDhcpOptionsAttributes {
  domain_name?: string
  domain_name_servers?: Array<string>
  id: string
  netbios_name_servers?: Array<string>
  netbios_node_type?: string
  ntp_servers?: Array<string>
  owner_id: string
  tags?: {[key: string]: string}
}

export class VpcDhcpOptions extends Resource<VpcDhcpOptionsArguments, VpcDhcpOptionsAttributes> {
  _kind = 'aws_vpc_dhcp_options'

  get domain_name() {
    return this._attr('domain_name')
  }

  get domain_name_servers() {
    return this._attr('domain_name_servers')
  }

  get id() {
    return this._attr('id')
  }

  get netbios_name_servers() {
    return this._attr('netbios_name_servers')
  }

  get netbios_node_type() {
    return this._attr('netbios_node_type')
  }

  get ntp_servers() {
    return this._attr('ntp_servers')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get tags() {
    return this._attr('tags')
  }
}
