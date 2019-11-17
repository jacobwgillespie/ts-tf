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
  kind = 'aws_wafregional_regex_match_set'
  _outputAttrNames = ['id', 'name'] as const
}
