import {Resource} from '../Resource'

export interface Route53ZoneArguments {
  comment?: string
  delegation_set_id?: string
  force_destroy?: boolean
  id?: string
  name: string
  tags?: {[key: string]: string}
  vpc_id?: string
  vpc_region?: string
}

export interface Route53ZoneAttributes {
  comment?: string
  delegation_set_id?: string
  force_destroy?: boolean
  id: string
  name: string
  name_servers: Array<string>
  tags?: {[key: string]: string}
  vpc_id: string
  vpc_region: string
  zone_id: string
}

export class Route53Zone extends Resource<Route53ZoneArguments, Route53ZoneAttributes> {
  kind = 'aws_route53_zone'
  _outputAttrNames = [
    'comment',
    'delegation_set_id',
    'force_destroy',
    'id',
    'name',
    'name_servers',
    'tags',
    'vpc_id',
    'vpc_region',
    'zone_id',
  ] as const
}
