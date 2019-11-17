import {Resource} from '../Resource'

export interface WafregionalByteMatchSetArguments {
  id?: string
  name: string
}

export interface WafregionalByteMatchSetAttributes {
  id: string
  name: string
}

export class WafregionalByteMatchSet extends Resource<
  WafregionalByteMatchSetArguments,
  WafregionalByteMatchSetAttributes
> {
  kind = 'aws_wafregional_byte_match_set'
  _outputAttrNames = ['id', 'name'] as const
}
