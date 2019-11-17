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
  kind = 'aws_security_group'
  _outputAttrNames = [
    'arn',
    'description',
    'egress',
    'id',
    'ingress',
    'name',
    'name_prefix',
    'owner_id',
    'revoke_rules_on_delete',
    'tags',
    'vpc_id',
  ] as const
}
