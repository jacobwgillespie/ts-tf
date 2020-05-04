import {Resource} from '../Resource'

export interface WafRuleGroupArguments {
  id?: string
  metric_name: string
  name: string
}

export interface WafRuleGroupAttributes {
  id: string
  metric_name: string
  name: string
}

export class WafRuleGroup extends Resource<WafRuleGroupArguments, WafRuleGroupAttributes> {
  _kind = 'aws_waf_rule_group'

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
