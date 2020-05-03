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
  _kind = 'aws_wafregional_byte_match_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
