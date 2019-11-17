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
  kind = 'aws_wafregional_rule_group'
  _outputAttrNames = ['id', 'metric_name', 'name'] as const
}
