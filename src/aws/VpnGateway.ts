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
  kind = 'aws_vpn_gateway'
  _outputAttrNames = ['amazon_side_asn', 'availability_zone', 'id', 'tags', 'vpc_id'] as const
}
