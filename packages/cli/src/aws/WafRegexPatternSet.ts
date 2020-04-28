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
  _kind = 'aws_waf_regex_pattern_set'

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
