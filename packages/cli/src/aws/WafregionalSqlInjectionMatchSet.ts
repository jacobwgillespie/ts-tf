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
  _kind = 'aws_wafregional_sql_injection_match_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
