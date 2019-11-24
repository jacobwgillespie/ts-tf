import {Resource} from '../Resource'

export interface WafRuleArguments {
  id?: string
  metric_name: string
  name: string
}

export interface WafRuleAttributes {
  id: string
  metric_name: string
  name: string
}

export class WafRule extends Resource<WafRuleArguments, WafRuleAttributes> {
  _kind = 'aws_waf_rule'

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
