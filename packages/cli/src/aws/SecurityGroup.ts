import {Resource} from '../Resource'

export interface SecurityGroupArguments {
  description?: string
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
  name?: string
  name_prefix?: string
  revoke_rules_on_delete?: boolean
  tags?: {[key: string]: string}
  vpc_id?: string
}

export interface SecurityGroupAttributes {
  arn: string
  description?: string
  egress: Set<{
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
  ingress: Set<{
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
  name_prefix?: string
  owner_id: string
  revoke_rules_on_delete?: boolean
  tags?: {[key: string]: string}
  vpc_id: string
}

export class SecurityGroup extends Resource<SecurityGroupArguments, SecurityGroupAttributes> {
  _kind = 'aws_security_group'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
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

  get name_prefix() {
    return this._attr('name_prefix')
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
