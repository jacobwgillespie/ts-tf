import {Resource} from '../Resource'

export interface Route53RecordArguments {
  allow_overwrite?: boolean
  health_check_id?: string
  id?: string
  multivalue_answer_routing_policy?: boolean
  name: string
  records?: Set<string>
  set_identifier?: string
  ttl?: number
  type: string
  zone_id: string
}

export interface Route53RecordAttributes {
  allow_overwrite: boolean
  fqdn: string
  health_check_id?: string
  id: string
  multivalue_answer_routing_policy?: boolean
  name: string
  records?: Set<string>
  set_identifier?: string
  ttl?: number
  type: string
  zone_id: string
}

export class Route53Record extends Resource<Route53RecordArguments, Route53RecordAttributes> {
  kind = 'aws_route53_record'
  _outputAttrNames = [
    'allow_overwrite',
    'fqdn',
    'health_check_id',
    'id',
    'multivalue_answer_routing_policy',
    'name',
    'records',
    'set_identifier',
    'ttl',
    'type',
    'zone_id',
  ] as const
}
