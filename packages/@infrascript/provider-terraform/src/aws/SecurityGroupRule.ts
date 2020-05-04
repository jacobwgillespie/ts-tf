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
  _kind = 'aws_security_group_rule'

  get cidr_blocks() {
    return this._attr('cidr_blocks')
  }

  get description() {
    return this._attr('description')
  }

  get from_port() {
    return this._attr('from_port')
  }

  get id() {
    return this._attr('id')
  }

  get ipv6_cidr_blocks() {
    return this._attr('ipv6_cidr_blocks')
  }

  get prefix_list_ids() {
    return this._attr('prefix_list_ids')
  }

  get protocol() {
    return this._attr('protocol')
  }

  get security_group_id() {
    return this._attr('security_group_id')
  }

  get self() {
    return this._attr('self')
  }

  get source_security_group_id() {
    return this._attr('source_security_group_id')
  }

  get to_port() {
    return this._attr('to_port')
  }

  get type() {
    return this._attr('type')
  }
}
