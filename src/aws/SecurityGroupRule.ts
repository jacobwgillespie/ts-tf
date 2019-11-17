import {Resource} from '../Resource'

export interface SecurityGroupRuleArguments {
  cidr_blocks?: Array<string>
  description?: string
  from_port: number
  id?: string
  ipv6_cidr_blocks?: Array<string>
  prefix_list_ids?: Array<string>
  protocol: string
  security_group_id: string
  self?: boolean
  source_security_group_id?: string
  to_port: number
  /** Type of rule, ingress (inbound) or egress (outbound). */
  type: string
}

export interface SecurityGroupRuleAttributes {
  cidr_blocks?: Array<string>
  description?: string
  from_port: number
  id: string
  ipv6_cidr_blocks?: Array<string>
  prefix_list_ids?: Array<string>
  protocol: string
  security_group_id: string
  self?: boolean
  source_security_group_id: string
  to_port: number
  /** Type of rule, ingress (inbound) or egress (outbound). */
  type: string
}

export class SecurityGroupRule extends Resource<SecurityGroupRuleArguments, SecurityGroupRuleAttributes> {
  kind = 'aws_security_group_rule'
  _outputAttrNames = [
    'cidr_blocks',
    'description',
    'from_port',
    'id',
    'ipv6_cidr_blocks',
    'prefix_list_ids',
    'protocol',
    'security_group_id',
    'self',
    'source_security_group_id',
    'to_port',
    'type',
  ] as const
}
