import {Resource} from '../Resource'

export interface WafregionalRuleGroupArguments {
  id?: string
  metric_name: string
  name: string
}

export interface WafregionalRuleGroupAttributes {
  id: string
  metric_name: string
  name: string
}

export class WafregionalRuleGroup extends Resource<WafregionalRuleGroupArguments, WafregionalRuleGroupAttributes> {
  _kind = 'aws_wafregional_rule_group'

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
