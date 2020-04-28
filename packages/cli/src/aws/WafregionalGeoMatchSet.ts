import {Resource} from '../Resource'

export interface WafregionalGeoMatchSetArguments {
  id?: string
  name: string
}

export interface WafregionalGeoMatchSetAttributes {
  id: string
  name: string
}

export class WafregionalGeoMatchSet extends Resource<
  WafregionalGeoMatchSetArguments,
  WafregionalGeoMatchSetAttributes
> {
  _kind = 'aws_wafregional_geo_match_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
