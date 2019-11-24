import {Resource} from '../Resource'

export interface DxGatewayArguments {
  amazon_side_asn: string
  id?: string
  name: string
}

export interface DxGatewayAttributes {
  amazon_side_asn: string
  id: string
  name: string
  owner_account_id: string
}

export class DxGateway extends Resource<DxGatewayArguments, DxGatewayAttributes> {
  _kind = 'aws_dx_gateway'

  get amazon_side_asn() {
    return this._attr('amazon_side_asn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get owner_account_id() {
    return this._attr('owner_account_id')
  }
}
