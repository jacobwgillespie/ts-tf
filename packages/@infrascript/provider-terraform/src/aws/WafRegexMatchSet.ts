import {Resource} from '../Resource'

export interface WafRegexMatchSetArguments {
  id?: string
  name: string
}

export interface WafRegexMatchSetAttributes {
  id: string
  name: string
}

export class WafRegexMatchSet extends Resource<WafRegexMatchSetArguments, WafRegexMatchSetAttributes> {
  _kind = 'aws_waf_regex_match_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
