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
  kind = 'aws_waf_rule'
  _outputAttrNames = ['id', 'metric_name', 'name'] as const
}
