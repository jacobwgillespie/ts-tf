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
  _kind = 'aws_wafregional_regex_pattern_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get regex_pattern_strings() {
    return this._attr('regex_pattern_strings')
  }
}
