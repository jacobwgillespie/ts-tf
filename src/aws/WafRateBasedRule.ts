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
  _kind = 'aws_waf_rate_based_rule'

  get id() {
    return this._attr('id')
  }

  get metric_name() {
    return this._attr('metric_name')
  }

  get name() {
    return this._attr('name')
  }

  get rate_key() {
    return this._attr('rate_key')
  }

  get rate_limit() {
    return this._attr('rate_limit')
  }
}
