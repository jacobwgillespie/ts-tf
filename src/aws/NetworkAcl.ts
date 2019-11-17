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
  kind = 'aws_network_acl'
  _outputAttrNames = ['egress', 'id', 'ingress', 'owner_id', 'subnet_id', 'subnet_ids', 'tags', 'vpc_id'] as const
}
