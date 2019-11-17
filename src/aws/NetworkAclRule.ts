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
  kind = 'aws_network_acl_rule'
  _outputAttrNames = [
    'cidr_block',
    'egress',
    'from_port',
    'icmp_code',
    'icmp_type',
    'id',
    'ipv6_cidr_block',
    'network_acl_id',
    'protocol',
    'rule_action',
    'rule_number',
    'to_port',
  ] as const
}
