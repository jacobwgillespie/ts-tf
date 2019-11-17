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
  kind = 'aws_wafregional_geo_match_set'
  _outputAttrNames = ['id', 'name'] as const
}
