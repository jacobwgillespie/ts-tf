import {Resource} from '../Resource'

export interface VpnGatewayArguments {
  amazon_side_asn?: string
  availability_zone?: string
  id?: string
  tags?: {[key: string]: string}
  vpc_id?: string
}

export interface VpnGatewayAttributes {
  amazon_side_asn: string
  availability_zone?: string
  id: string
  tags?: {[key: string]: string}
  vpc_id: string
}

export class VpnGateway extends Resource<VpnGatewayArguments, VpnGatewayAttributes> {
  _kind = 'aws_vpn_gateway'

  get amazon_side_asn() {
    return this._attr('amazon_side_asn')
  }

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get id() {
    return this._attr('id')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
