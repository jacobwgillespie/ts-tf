import {Resource} from '../Resource'

export interface WafByteMatchSetArguments {
  id?: string
  name: string
}

export interface WafByteMatchSetAttributes {
  id: string
  name: string
}

export class WafByteMatchSet extends Resource<WafByteMatchSetArguments, WafByteMatchSetAttributes> {
  kind = 'aws_waf_byte_match_set'
  _outputAttrNames = ['id', 'name'] as const
}
