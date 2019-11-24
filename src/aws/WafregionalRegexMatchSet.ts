import {Resource} from '../Resource'

export interface WafregionalRegexMatchSetArguments {
  id?: string
  name: string
}

export interface WafregionalRegexMatchSetAttributes {
  id: string
  name: string
}

export class WafregionalRegexMatchSet extends Resource<
  WafregionalRegexMatchSetArguments,
  WafregionalRegexMatchSetAttributes
> {
  _kind = 'aws_wafregional_regex_match_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
