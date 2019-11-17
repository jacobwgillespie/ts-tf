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
  kind = 'aws_route53_resolver_rule_association'
  _outputAttrNames = ['id', 'name', 'resolver_rule_id', 'vpc_id'] as const
}
