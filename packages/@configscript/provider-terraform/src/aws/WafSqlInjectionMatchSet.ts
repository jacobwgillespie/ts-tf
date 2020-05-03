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
  _kind = 'aws_waf_sql_injection_match_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
