import {Resource} from '../Resource'

export interface WafregionalRegexPatternSetArguments {
  id?: string
  name: string
  regex_pattern_strings?: Set<string>
}

export interface WafregionalRegexPatternSetAttributes {
  id: string
  name: string
  regex_pattern_strings?: Set<string>
}

export class WafregionalRegexPatternSet extends Resource<
  WafregionalRegexPatternSetArguments,
  WafregionalRegexPatternSetAttributes
> {
  kind = 'aws_wafregional_regex_pattern_set'
  _outputAttrNames = ['id', 'name', 'regex_pattern_strings'] as const
}
