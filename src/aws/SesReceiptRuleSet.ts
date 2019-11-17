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
  kind = 'aws_ses_receipt_rule_set'
  _outputAttrNames = ['id', 'rule_set_name'] as const
}
