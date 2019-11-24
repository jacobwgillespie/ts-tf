import {Resource} from '../Resource'

export interface WafregionalIpsetArguments {
  id?: string
  name: string
}

export interface WafregionalIpsetAttributes {
  arn: string
  id: string
  name: string
}

export class WafregionalIpset extends Resource<WafregionalIpsetArguments, WafregionalIpsetAttributes> {
  _kind = 'aws_wafregional_ipset'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
