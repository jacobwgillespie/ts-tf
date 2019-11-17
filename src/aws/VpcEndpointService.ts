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
  kind = 'aws_vpc_endpoint_service'
  _outputAttrNames = [
    'acceptance_required',
    'allowed_principals',
    'availability_zones',
    'base_endpoint_dns_names',
    'id',
    'manages_vpc_endpoints',
    'network_load_balancer_arns',
    'private_dns_name',
    'service_name',
    'service_type',
    'state',
    'tags',
  ] as const
}
