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
  kind = 'aws_wafregional_xss_match_set'
  _outputAttrNames = ['id', 'name'] as const
}
