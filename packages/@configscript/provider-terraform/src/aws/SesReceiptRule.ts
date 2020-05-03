import {Resource} from '../Resource'

export interface SesReceiptRuleArguments {
  after?: string
  enabled?: boolean
  id?: string
  name: string
  recipients?: Set<string>
  rule_set_name: string
  scan_enabled?: boolean
  tls_policy?: string
}

export interface SesReceiptRuleAttributes {
  after?: string
  enabled: boolean
  id: string
  name: string
  recipients?: Set<string>
  rule_set_name: string
  scan_enabled: boolean
  tls_policy: string
}

export class SesReceiptRule extends Resource<SesReceiptRuleArguments, SesReceiptRuleAttributes> {
  _kind = 'aws_ses_receipt_rule'

  get after() {
    return this._attr('after')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get recipients() {
    return this._attr('recipients')
  }

  get rule_set_name() {
    return this._attr('rule_set_name')
  }

  get scan_enabled() {
    return this._attr('scan_enabled')
  }

  get tls_policy() {
    return this._attr('tls_policy')
  }
}
