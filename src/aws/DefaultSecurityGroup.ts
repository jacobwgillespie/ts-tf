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
  kind = 'aws_default_security_group'
  _outputAttrNames = [
    'arn',
    'egress',
    'id',
    'ingress',
    'name',
    'owner_id',
    'revoke_rules_on_delete',
    'tags',
    'vpc_id',
  ] as const
}
