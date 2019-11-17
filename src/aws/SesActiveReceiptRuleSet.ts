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
  kind = 'aws_ses_active_receipt_rule_set'
  _outputAttrNames = ['id', 'rule_set_name'] as const
}
