import {Resource} from '../Resource'

export interface WafregionalRateBasedRuleArguments {
  id?: string
  metric_name: string
  name: string
  rate_key: string
  rate_limit: number
}

export interface WafregionalRateBasedRuleAttributes {
  id: string
  metric_name: string
  name: string
  rate_key: string
  rate_limit: number
}

export class WafregionalRateBasedRule extends Resource<
  WafregionalRateBasedRuleArguments,
  WafregionalRateBasedRuleAttributes
> {
  kind = 'aws_wafregional_rate_based_rule'
  _outputAttrNames = ['id', 'metric_name', 'name', 'rate_key', 'rate_limit'] as const
}
