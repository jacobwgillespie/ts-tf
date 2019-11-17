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
  kind = 'aws_wafregional_rule'
  _outputAttrNames = ['id', 'metric_name', 'name'] as const
}
