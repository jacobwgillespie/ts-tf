import {Resource} from '../Resource'

export interface Ec2ClientVpnEndpointArguments {
  client_cidr_block: string
  description?: string
  dns_servers?: Set<string>
  id?: string
  server_certificate_arn: string
  split_tunnel?: boolean
  tags?: {[key: string]: string}
  transport_protocol?: string
}

export interface Ec2ClientVpnEndpointAttributes {
  client_cidr_block: string
  description?: string
  dns_name: string
  dns_servers?: Set<string>
  id: string
  server_certificate_arn: string
  split_tunnel?: boolean
  status: string
  tags?: {[key: string]: string}
  transport_protocol?: string
}

export class Ec2ClientVpnEndpoint extends Resource<Ec2ClientVpnEndpointArguments, Ec2ClientVpnEndpointAttributes> {
  kind = 'aws_ec2_client_vpn_endpoint'
  _outputAttrNames = [
    'client_cidr_block',
    'description',
    'dns_name',
    'dns_servers',
    'id',
    'server_certificate_arn',
    'split_tunnel',
    'status',
    'tags',
    'transport_protocol',
  ] as const
}
