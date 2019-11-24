import {Resource} from '../Resource'

export interface WafregionalRuleArguments {
  id?: string
  metric_name: string
  name: string
}

export interface WafregionalRuleAttributes {
  id: string
  metric_name: string
  name: string
}

export class WafregionalRule extends Resource<WafregionalRuleArguments, WafregionalRuleAttributes> {
  _kind = 'aws_wafregional_rule'

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
