import {Resource} from '../Resource'

export interface ElbArguments {
  availability_zones?: Set<string>
  connection_draining?: boolean
  connection_draining_timeout?: number
  cross_zone_load_balancing?: boolean
  id?: string
  idle_timeout?: number
  instances?: Set<string>
  internal?: boolean
  name?: string
  name_prefix?: string
  security_groups?: Set<string>
  source_security_group?: string
  subnets?: Set<string>
  tags?: {[key: string]: string}
}

export interface ElbAttributes {
  arn: string
  availability_zones: Set<string>
  connection_draining?: boolean
  connection_draining_timeout?: number
  cross_zone_load_balancing?: boolean
  dns_name: string
  id: string
  idle_timeout?: number
  instances: Set<string>
  internal: boolean
  name: string
  name_prefix?: string
  security_groups: Set<string>
  source_security_group: string
  source_security_group_id: string
  subnets: Set<string>
  tags?: {[key: string]: string}
  zone_id: string
}

export class Elb extends Resource<ElbArguments, ElbAttributes> {
  kind = 'aws_elb'
  _outputAttrNames = [
    'arn',
    'availability_zones',
    'connection_draining',
    'connection_draining_timeout',
    'cross_zone_load_balancing',
    'dns_name',
    'id',
    'idle_timeout',
    'instances',
    'internal',
    'name',
    'name_prefix',
    'security_groups',
    'source_security_group',
    'source_security_group_id',
    'subnets',
    'tags',
    'zone_id',
  ] as const
}
