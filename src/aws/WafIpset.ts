import {Resource} from '../Resource'

export interface WafIpsetArguments {
  id?: string
  name: string
}

export interface WafIpsetAttributes {
  arn: string
  id: string
  name: string
}

export class WafIpset extends Resource<WafIpsetArguments, WafIpsetAttributes> {
  _kind = 'aws_waf_ipset'

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
