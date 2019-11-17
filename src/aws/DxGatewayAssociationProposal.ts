import {Resource} from '../Resource'

export interface DxGatewayAssociationProposalArguments {
  allowed_prefixes?: Set<string>
  associated_gateway_id?: string
  dx_gateway_id: string
  dx_gateway_owner_account_id: string
  id?: string
  vpn_gateway_id?: string
}

export interface DxGatewayAssociationProposalAttributes {
  allowed_prefixes: Set<string>
  associated_gateway_id?: string
  associated_gateway_owner_account_id: string
  associated_gateway_type: string
  dx_gateway_id: string
  dx_gateway_owner_account_id: string
  id: string
  vpn_gateway_id?: string
}

export class DxGatewayAssociationProposal extends Resource<
  DxGatewayAssociationProposalArguments,
  DxGatewayAssociationProposalAttributes
> {
  kind = 'aws_dx_gateway_association_proposal'
  _outputAttrNames = [
    'allowed_prefixes',
    'associated_gateway_id',
    'associated_gateway_owner_account_id',
    'associated_gateway_type',
    'dx_gateway_id',
    'dx_gateway_owner_account_id',
    'id',
    'vpn_gateway_id',
  ] as const
}
