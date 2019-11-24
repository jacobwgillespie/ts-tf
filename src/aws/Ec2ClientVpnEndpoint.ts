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
  _kind = 'aws_ec2_client_vpn_endpoint'

  get client_cidr_block() {
    return this._attr('client_cidr_block')
  }

  get description() {
    return this._attr('description')
  }

  get dns_name() {
    return this._attr('dns_name')
  }

  get dns_servers() {
    return this._attr('dns_servers')
  }

  get id() {
    return this._attr('id')
  }

  get server_certificate_arn() {
    return this._attr('server_certificate_arn')
  }

  get split_tunnel() {
    return this._attr('split_tunnel')
  }

  get status() {
    return this._attr('status')
  }

  get tags() {
    return this._attr('tags')
  }

  get transport_protocol() {
    return this._attr('transport_protocol')
  }
}
