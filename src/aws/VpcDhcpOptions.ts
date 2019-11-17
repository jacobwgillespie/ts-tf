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
  kind = 'aws_vpc_dhcp_options'
  _outputAttrNames = [
    'domain_name',
    'domain_name_servers',
    'id',
    'netbios_name_servers',
    'netbios_node_type',
    'ntp_servers',
    'owner_id',
    'tags',
  ] as const
}
