import {Resource} from '../Resource'

export interface VpcEndpointServiceArguments {
  acceptance_required: boolean
  allowed_principals?: Set<string>
  id?: string
  network_load_balancer_arns: Set<string>
  tags?: {[key: string]: string}
}

export interface VpcEndpointServiceAttributes {
  acceptance_required: boolean
  allowed_principals: Set<string>
  availability_zones: Set<string>
  base_endpoint_dns_names: Set<string>
  id: string
  manages_vpc_endpoints: boolean
  network_load_balancer_arns: Set<string>
  private_dns_name: string
  service_name: string
  service_type: string
  state: string
  tags?: {[key: string]: string}
}

export class VpcEndpointService extends Resource<VpcEndpointServiceArguments, VpcEndpointServiceAttributes> {
  _kind = 'aws_vpc_endpoint_service'

  get acceptance_required() {
    return this._attr('acceptance_required')
  }

  get allowed_principals() {
    return this._attr('allowed_principals')
  }

  get availability_zones() {
    return this._attr('availability_zones')
  }

  get base_endpoint_dns_names() {
    return this._attr('base_endpoint_dns_names')
  }

  get id() {
    return this._attr('id')
  }

  get manages_vpc_endpoints() {
    return this._attr('manages_vpc_endpoints')
  }

  get network_load_balancer_arns() {
    return this._attr('network_load_balancer_arns')
  }

  get private_dns_name() {
    return this._attr('private_dns_name')
  }

  get service_name() {
    return this._attr('service_name')
  }

  get service_type() {
    return this._attr('service_type')
  }

  get state() {
    return this._attr('state')
  }

  get tags() {
    return this._attr('tags')
  }
}
