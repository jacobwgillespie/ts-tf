import {Resource} from '../Resource'

export interface DefaultSecurityGroupArguments {
  egress?: Set<{
    cidr_blocks: Array<string>
    description: string
    from_port: number
    ipv6_cidr_blocks: Array<string>
    prefix_list_ids: Array<string>
    protocol: string
    security_groups: Set<string>
    self: boolean
    to_port: number
  }>
  id?: string
  ingress?: Set<{
    cidr_blocks: Array<string>
    description: string
    from_port: number
    ipv6_cidr_blocks: Array<string>
    prefix_list_ids: Array<string>
    protocol: string
    security_groups: Set<string>
    self: boolean
    to_port: number
  }>
  revoke_rules_on_delete?: boolean
  tags?: {[key: string]: string}
  vpc_id?: string
}

export interface DefaultSecurityGroupAttributes {
  arn: string
  egress?: Set<{
    cidr_blocks: Array<string>
    description: string
    from_port: number
    ipv6_cidr_blocks: Array<string>
    prefix_list_ids: Array<string>
    protocol: string
    security_groups: Set<string>
    self: boolean
    to_port: number
  }>
  id: string
  ingress?: Set<{
    cidr_blocks: Array<string>
    description: string
    from_port: number
    ipv6_cidr_blocks: Array<string>
    prefix_list_ids: Array<string>
    protocol: string
    security_groups: Set<string>
    self: boolean
    to_port: number
  }>
  name: string
  owner_id: string
  revoke_rules_on_delete?: boolean
  tags?: {[key: string]: string}
  vpc_id: string
}

export class DefaultSecurityGroup extends Resource<DefaultSecurityGroupArguments, DefaultSecurityGroupAttributes> {
  _kind = 'aws_default_security_group'

  get arn() {
    return this._attr('arn')
  }

  get egress() {
    return this._attr('egress')
  }

  get id() {
    return this._attr('id')
  }

  get ingress() {
    return this._attr('ingress')
  }

  get name() {
    return this._attr('name')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get revoke_rules_on_delete() {
    return this._attr('revoke_rules_on_delete')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
