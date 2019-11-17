import {Resource} from '../Resource'

export interface VpcEndpointArguments {
  auto_accept?: boolean
  id?: string
  policy?: string
  private_dns_enabled?: boolean
  route_table_ids?: Set<string>
  security_group_ids?: Set<string>
  service_name: string
  subnet_ids?: Set<string>
  tags?: {[key: string]: string}
  vpc_endpoint_type?: string
  vpc_id: string
}

export interface VpcEndpointAttributes {
  auto_accept?: boolean
  cidr_blocks: Array<string>
  dns_entry: Array<{dns_name: string; hosted_zone_id: string}>
  id: string
  network_interface_ids: Set<string>
  owner_id: string
  policy: string
  prefix_list_id: string
  private_dns_enabled?: boolean
  requester_managed: boolean
  route_table_ids: Set<string>
  security_group_ids: Set<string>
  service_name: string
  state: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
  vpc_endpoint_type?: string
  vpc_id: string
}

export class VpcEndpoint extends Resource<VpcEndpointArguments, VpcEndpointAttributes> {
  kind = 'aws_vpc_endpoint'
  _outputAttrNames = [
    'auto_accept',
    'cidr_blocks',
    'dns_entry',
    'id',
    'network_interface_ids',
    'owner_id',
    'policy',
    'prefix_list_id',
    'private_dns_enabled',
    'requester_managed',
    'route_table_ids',
    'security_group_ids',
    'service_name',
    'state',
    'subnet_ids',
    'tags',
    'vpc_endpoint_type',
    'vpc_id',
  ] as const
}
