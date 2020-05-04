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
  _kind = 'aws_vpc_endpoint'

  get auto_accept() {
    return this._attr('auto_accept')
  }

  get cidr_blocks() {
    return this._attr('cidr_blocks')
  }

  get dns_entry() {
    return this._attr('dns_entry')
  }

  get id() {
    return this._attr('id')
  }

  get network_interface_ids() {
    return this._attr('network_interface_ids')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get policy() {
    return this._attr('policy')
  }

  get prefix_list_id() {
    return this._attr('prefix_list_id')
  }

  get private_dns_enabled() {
    return this._attr('private_dns_enabled')
  }

  get requester_managed() {
    return this._attr('requester_managed')
  }

  get route_table_ids() {
    return this._attr('route_table_ids')
  }

  get security_group_ids() {
    return this._attr('security_group_ids')
  }

  get service_name() {
    return this._attr('service_name')
  }

  get state() {
    return this._attr('state')
  }

  get subnet_ids() {
    return this._attr('subnet_ids')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_endpoint_type() {
    return this._attr('vpc_endpoint_type')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
