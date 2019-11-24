import {Resource} from '../Resource'

export interface SesActiveReceiptRuleSetArguments {
  id?: string
  rule_set_name: string
}

export interface SesActiveReceiptRuleSetAttributes {
  id: string
  rule_set_name: string
}

export class SesActiveReceiptRuleSet extends Resource<
  SesActiveReceiptRuleSetArguments,
  SesActiveReceiptRuleSetAttributes
> {
  _kind = 'aws_ses_active_receipt_rule_set'

  get id() {
    return this._attr('id')
  }

  get rule_set_name() {
    return this._attr('rule_set_name')
  }
}
