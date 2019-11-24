import {Resource} from '../Resource'

export interface WafWebAclArguments {
  id?: string
  metric_name: string
  name: string
}

export interface WafWebAclAttributes {
  arn: string
  id: string
  metric_name: string
  name: string
}

export class WafWebAcl extends Resource<WafWebAclArguments, WafWebAclAttributes> {
  _kind = 'aws_waf_web_acl'

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
