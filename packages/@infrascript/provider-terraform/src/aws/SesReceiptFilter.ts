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
  _kind = 'aws_ses_receipt_filter'

  get cidr() {
    return this._attr('cidr')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get policy() {
    return this._attr('policy')
  }
}
