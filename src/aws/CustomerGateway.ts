import {Resource} from '../Resource'

export interface CustomerGatewayArguments {
  bgp_asn: number
  id?: string
  ip_address: string
  tags?: {[key: string]: string}
  type: string
}

export interface CustomerGatewayAttributes {
  bgp_asn: number
  id: string
  ip_address: string
  tags?: {[key: string]: string}
  type: string
}

export class CustomerGateway extends Resource<CustomerGatewayArguments, CustomerGatewayAttributes> {
  kind = 'aws_customer_gateway'
  _outputAttrNames = ['bgp_asn', 'id', 'ip_address', 'tags', 'type'] as const
}
