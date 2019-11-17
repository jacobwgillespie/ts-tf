import {Resource} from '../Resource'

export interface WafregionalSqlInjectionMatchSetArguments {
  id?: string
  name: string
}

export interface WafregionalSqlInjectionMatchSetAttributes {
  id: string
  name: string
}

export class WafregionalSqlInjectionMatchSet extends Resource<
  WafregionalSqlInjectionMatchSetArguments,
  WafregionalSqlInjectionMatchSetAttributes
> {
  kind = 'aws_wafregional_sql_injection_match_set'
  _outputAttrNames = ['id', 'name'] as const
}
