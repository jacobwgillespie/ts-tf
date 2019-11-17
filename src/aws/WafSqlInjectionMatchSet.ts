import {Resource} from '../Resource'

export interface WafSqlInjectionMatchSetArguments {
  id?: string
  name: string
}

export interface WafSqlInjectionMatchSetAttributes {
  id: string
  name: string
}

export class WafSqlInjectionMatchSet extends Resource<
  WafSqlInjectionMatchSetArguments,
  WafSqlInjectionMatchSetAttributes
> {
  kind = 'aws_waf_sql_injection_match_set'
  _outputAttrNames = ['id', 'name'] as const
}
