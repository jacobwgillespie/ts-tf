import {Resource} from '../Resource'

export interface WafGeoMatchSetArguments {
  id?: string
  name: string
}

export interface WafGeoMatchSetAttributes {
  id: string
  name: string
}

export class WafGeoMatchSet extends Resource<WafGeoMatchSetArguments, WafGeoMatchSetAttributes> {
  _kind = 'aws_waf_geo_match_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
