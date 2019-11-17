import {Resource} from '../Resource'

export interface LbArguments {
  enable_cross_zone_load_balancing?: boolean
  enable_deletion_protection?: boolean
  enable_http2?: boolean
  id?: string
  idle_timeout?: number
  internal?: boolean
  ip_address_type?: string
  load_balancer_type?: string
  name?: string
  name_prefix?: string
  security_groups?: Set<string>
  subnets?: Set<string>
  tags?: {[key: string]: string}
}

export interface LbAttributes {
  arn: string
  arn_suffix: string
  dns_name: string
  enable_cross_zone_load_balancing?: boolean
  enable_deletion_protection?: boolean
  enable_http2?: boolean
  id: string
  idle_timeout?: number
  internal: boolean
  ip_address_type: string
  load_balancer_type?: string
  name: string
  name_prefix?: string
  security_groups: Set<string>
  subnets: Set<string>
  tags?: {[key: string]: string}
  vpc_id: string
  zone_id: string
}

export class Lb extends Resource<LbArguments, LbAttributes> {
  kind = 'aws_lb'
  _outputAttrNames = [
    'arn',
    'arn_suffix',
    'dns_name',
    'enable_cross_zone_load_balancing',
    'enable_deletion_protection',
    'enable_http2',
    'id',
    'idle_timeout',
    'internal',
    'ip_address_type',
    'load_balancer_type',
    'name',
    'name_prefix',
    'security_groups',
    'subnets',
    'tags',
    'vpc_id',
    'zone_id',
  ] as const
}
