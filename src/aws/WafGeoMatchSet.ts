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
  kind = 'aws_waf_geo_match_set'
  _outputAttrNames = ['id', 'name'] as const
}
