import {Resource} from '../Resource'

export interface DefaultVpcDhcpOptionsArguments {
  id?: string
  netbios_name_servers?: Array<string>
  netbios_node_type?: string
  tags?: {[key: string]: string}
}

export interface DefaultVpcDhcpOptionsAttributes {
  domain_name: string
  domain_name_servers: string
  id: string
  netbios_name_servers?: Array<string>
  netbios_node_type?: string
  ntp_servers: string
  owner_id: string
  tags?: {[key: string]: string}
}

export class DefaultVpcDhcpOptions extends Resource<DefaultVpcDhcpOptionsArguments, DefaultVpcDhcpOptionsAttributes> {
  kind = 'aws_default_vpc_dhcp_options'
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
