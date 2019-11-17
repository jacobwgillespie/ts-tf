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
  kind = 'aws_waf_rule_group'
  _outputAttrNames = ['id', 'metric_name', 'name'] as const
}
