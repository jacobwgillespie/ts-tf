import {Resource} from '../Resource'

export interface NetworkAclRuleArguments {
  cidr_block?: string
  egress?: boolean
  from_port?: number
  icmp_code?: string
  icmp_type?: string
  id?: string
  ipv6_cidr_block?: string
  network_acl_id: string
  protocol: string
  rule_action: string
  rule_number: number
  to_port?: number
}

export interface NetworkAclRuleAttributes {
  cidr_block?: string
  egress?: boolean
  from_port?: number
  icmp_code?: string
  icmp_type?: string
  id: string
  ipv6_cidr_block?: string
  network_acl_id: string
  protocol: string
  rule_action: string
  rule_number: number
  to_port?: number
}

export class NetworkAclRule extends Resource<NetworkAclRuleArguments, NetworkAclRuleAttributes> {
  _kind = 'aws_network_acl_rule'

  get cidr_block() {
    return this._attr('cidr_block')
  }

  get egress() {
    return this._attr('egress')
  }

  get from_port() {
    return this._attr('from_port')
  }

  get icmp_code() {
    return this._attr('icmp_code')
  }

  get icmp_type() {
    return this._attr('icmp_type')
  }

  get id() {
    return this._attr('id')
  }

  get ipv6_cidr_block() {
    return this._attr('ipv6_cidr_block')
  }

  get network_acl_id() {
    return this._attr('network_acl_id')
  }

  get protocol() {
    return this._attr('protocol')
  }

  get rule_action() {
    return this._attr('rule_action')
  }

  get rule_number() {
    return this._attr('rule_number')
  }

  get to_port() {
    return this._attr('to_port')
  }
}
