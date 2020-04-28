import {Resource} from '../Resource'

export interface WafXssMatchSetArguments {
  id?: string
  name: string
}

export interface WafXssMatchSetAttributes {
  id: string
  name: string
}

export class WafXssMatchSet extends Resource<WafXssMatchSetArguments, WafXssMatchSetAttributes> {
  _kind = 'aws_waf_xss_match_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
