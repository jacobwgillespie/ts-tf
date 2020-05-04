import {Resource} from '../Resource'

export interface NetworkAclArguments {
  egress?: Set<{
    action: string
    cidr_block: string
    from_port: number
    icmp_code: number
    icmp_type: number
    ipv6_cidr_block: string
    protocol: string
    rule_no: number
    to_port: number
  }>
  id?: string
  ingress?: Set<{
    action: string
    cidr_block: string
    from_port: number
    icmp_code: number
    icmp_type: number
    ipv6_cidr_block: string
    protocol: string
    rule_no: number
    to_port: number
  }>
  subnet_id?: string
  subnet_ids?: Set<string>
  tags?: {[key: string]: string}
  vpc_id: string
}

export interface NetworkAclAttributes {
  egress: Set<{
    action: string
    cidr_block: string
    from_port: number
    icmp_code: number
    icmp_type: number
    ipv6_cidr_block: string
    protocol: string
    rule_no: number
    to_port: number
  }>
  id: string
  ingress: Set<{
    action: string
    cidr_block: string
    from_port: number
    icmp_code: number
    icmp_type: number
    ipv6_cidr_block: string
    protocol: string
    rule_no: number
    to_port: number
  }>
  owner_id: string
  subnet_id?: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
  vpc_id: string
}

export class NetworkAcl extends Resource<NetworkAclArguments, NetworkAclAttributes> {
  _kind = 'aws_network_acl'

  get egress() {
    return this._attr('egress')
  }

  get id() {
    return this._attr('id')
  }

  get ingress() {
    return this._attr('ingress')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }

  get subnet_ids() {
    return this._attr('subnet_ids')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
