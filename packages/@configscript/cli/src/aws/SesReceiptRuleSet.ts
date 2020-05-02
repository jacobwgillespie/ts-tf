import {Resource} from '../Resource'

export interface SesReceiptRuleSetArguments {
  id?: string
  rule_set_name: string
}

export interface SesReceiptRuleSetAttributes {
  id: string
  rule_set_name: string
}

export class SesReceiptRuleSet extends Resource<SesReceiptRuleSetArguments, SesReceiptRuleSetAttributes> {
  _kind = 'aws_ses_receipt_rule_set'

  get id() {
    return this._attr('id')
  }

  get rule_set_name() {
    return this._attr('rule_set_name')
  }
}
