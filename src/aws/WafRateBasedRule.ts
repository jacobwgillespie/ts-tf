import {Resource} from '../Resource'

export interface WafRateBasedRuleArguments {
  id?: string
  metric_name: string
  name: string
  rate_key: string
  rate_limit: number
}

export interface WafRateBasedRuleAttributes {
  id: string
  metric_name: string
  name: string
  rate_key: string
  rate_limit: number
}

export class WafRateBasedRule extends Resource<WafRateBasedRuleArguments, WafRateBasedRuleAttributes> {
  kind = 'aws_waf_rate_based_rule'
  _outputAttrNames = ['id', 'metric_name', 'name', 'rate_key', 'rate_limit'] as const
}
