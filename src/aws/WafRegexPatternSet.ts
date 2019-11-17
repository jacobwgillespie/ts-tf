import {Resource} from '../Resource'

export interface WafRegexPatternSetArguments {
  id?: string
  name: string
  regex_pattern_strings?: Set<string>
}

export interface WafRegexPatternSetAttributes {
  id: string
  name: string
  regex_pattern_strings?: Set<string>
}

export class WafRegexPatternSet extends Resource<WafRegexPatternSetArguments, WafRegexPatternSetAttributes> {
  kind = 'aws_waf_regex_pattern_set'
  _outputAttrNames = ['id', 'name', 'regex_pattern_strings'] as const
}
