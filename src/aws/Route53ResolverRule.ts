import {Resource} from '../Resource'

export interface Route53ResolverRuleArguments {
  domain_name: string
  id?: string
  name?: string
  resolver_endpoint_id?: string
  rule_type: string
  tags?: {[key: string]: string}
}

export interface Route53ResolverRuleAttributes {
  arn: string
  domain_name: string
  id: string
  name?: string
  owner_id: string
  resolver_endpoint_id?: string
  rule_type: string
  share_status: string
  tags?: {[key: string]: string}
}

export class Route53ResolverRule extends Resource<Route53ResolverRuleArguments, Route53ResolverRuleAttributes> {
  kind = 'aws_route53_resolver_rule'
  _outputAttrNames = [
    'arn',
    'domain_name',
    'id',
    'name',
    'owner_id',
    'resolver_endpoint_id',
    'rule_type',
    'share_status',
    'tags',
  ] as const
}
