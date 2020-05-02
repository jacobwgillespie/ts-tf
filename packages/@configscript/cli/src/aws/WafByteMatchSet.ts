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
  _kind = 'aws_waf_byte_match_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
