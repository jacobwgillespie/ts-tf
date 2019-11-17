import {Resource} from '../Resource'

export interface SesReceiptFilterArguments {
  cidr: string
  id?: string
  name: string
  policy: string
}

export interface SesReceiptFilterAttributes {
  cidr: string
  id: string
  name: string
  policy: string
}

export class SesReceiptFilter extends Resource<SesReceiptFilterArguments, SesReceiptFilterAttributes> {
  kind = 'aws_ses_receipt_filter'
  _outputAttrNames = ['cidr', 'id', 'name', 'policy'] as const
}
