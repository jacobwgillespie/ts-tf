import {Resource} from '../Resource'

export interface CustomerGatewayArguments {
  bgp_asn: number
  id?: string
  ip_address: string
  tags?: {[key: string]: string}
  type: string
}

export interface CustomerGatewayAttributes {
  bgp_asn: number
  id: string
  ip_address: string
  tags?: {[key: string]: string}
  type: string
}

export class CustomerGateway extends Resource<CustomerGatewayArguments, CustomerGatewayAttributes> {
  _kind = 'aws_customer_gateway'

  get bgp_asn() {
    return this._attr('bgp_asn')
  }

  get id() {
    return this._attr('id')
  }

  get ip_address() {
    return this._attr('ip_address')
  }

  get tags() {
    return this._attr('tags')
  }

  get type() {
    return this._attr('type')
  }
}
