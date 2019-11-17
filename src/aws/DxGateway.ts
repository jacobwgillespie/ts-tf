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
  kind = 'aws_dx_gateway'
  _outputAttrNames = ['amazon_side_asn', 'id', 'name', 'owner_account_id'] as const
}
