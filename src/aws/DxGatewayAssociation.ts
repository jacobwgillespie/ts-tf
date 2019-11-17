import {Resource} from '../Resource'

export interface DxGatewayAssociationArguments {
  allowed_prefixes?: Set<string>
  associated_gateway_id?: string
  associated_gateway_owner_account_id?: string
  dx_gateway_id: string
  id?: string
  proposal_id?: string
  vpn_gateway_id?: string
}

export interface DxGatewayAssociationAttributes {
  allowed_prefixes: Set<string>
  associated_gateway_id: string
  associated_gateway_owner_account_id: string
  associated_gateway_type: string
  dx_gateway_association_id: string
  dx_gateway_id: string
  dx_gateway_owner_account_id: string
  id: string
  proposal_id?: string
  vpn_gateway_id?: string
}

export class DxGatewayAssociation extends Resource<DxGatewayAssociationArguments, DxGatewayAssociationAttributes> {
  kind = 'aws_dx_gateway_association'
  _outputAttrNames = [
    'allowed_prefixes',
    'associated_gateway_id',
    'associated_gateway_owner_account_id',
    'associated_gateway_type',
    'dx_gateway_association_id',
    'dx_gateway_id',
    'dx_gateway_owner_account_id',
    'id',
    'proposal_id',
    'vpn_gateway_id',
  ] as const
}
