import {Resource} from '../Resource'

export interface WafregionalXssMatchSetArguments {
  id?: string
  name: string
}

export interface WafregionalXssMatchSetAttributes {
  id: string
  name: string
}

export class WafregionalXssMatchSet extends Resource<
  WafregionalXssMatchSetArguments,
  WafregionalXssMatchSetAttributes
> {
  _kind = 'aws_wafregional_xss_match_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
