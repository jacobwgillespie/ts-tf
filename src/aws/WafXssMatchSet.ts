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
  kind = 'aws_waf_xss_match_set'
  _outputAttrNames = ['id', 'name'] as const
}
