import {Resource} from '../Resource'

export interface WafregionalWebAclArguments {
  id?: string
  metric_name: string
  name: string
}

export interface WafregionalWebAclAttributes {
  arn: string
  id: string
  metric_name: string
  name: string
}

export class WafregionalWebAcl extends Resource<WafregionalWebAclArguments, WafregionalWebAclAttributes> {
  _kind = 'aws_wafregional_web_acl'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get metric_name() {
    return this._attr('metric_name')
  }

  get name() {
    return this._attr('name')
  }
}
