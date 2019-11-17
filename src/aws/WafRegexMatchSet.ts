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
  kind = 'aws_waf_regex_match_set'
  _outputAttrNames = ['id', 'name'] as const
}
