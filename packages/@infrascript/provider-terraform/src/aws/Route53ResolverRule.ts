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
  _kind = 'aws_route53_resolver_rule'

  get arn() {
    return this._attr('arn')
  }

  get domain_name() {
    return this._attr('domain_name')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get resolver_endpoint_id() {
    return this._attr('resolver_endpoint_id')
  }

  get rule_type() {
    return this._attr('rule_type')
  }

  get share_status() {
    return this._attr('share_status')
  }

  get tags() {
    return this._attr('tags')
  }
}
