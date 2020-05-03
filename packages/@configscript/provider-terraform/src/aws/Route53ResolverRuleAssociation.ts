import {Resource} from '../Resource'

export interface Route53ResolverRuleAssociationArguments {
  id?: string
  name?: string
  resolver_rule_id: string
  vpc_id: string
}

export interface Route53ResolverRuleAssociationAttributes {
  id: string
  name?: string
  resolver_rule_id: string
  vpc_id: string
}

export class Route53ResolverRuleAssociation extends Resource<
  Route53ResolverRuleAssociationArguments,
  Route53ResolverRuleAssociationAttributes
> {
  _kind = 'aws_route53_resolver_rule_association'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get resolver_rule_id() {
    return this._attr('resolver_rule_id')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
