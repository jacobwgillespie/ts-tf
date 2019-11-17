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
  kind = 'aws_ses_receipt_rule'
  _outputAttrNames = [
    'after',
    'enabled',
    'id',
    'name',
    'recipients',
    'rule_set_name',
    'scan_enabled',
    'tls_policy',
  ] as const
}
