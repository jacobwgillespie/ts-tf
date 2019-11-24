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
  _kind = 'aws_dx_gateway_association_proposal'

  get allowed_prefixes() {
    return this._attr('allowed_prefixes')
  }

  get associated_gateway_id() {
    return this._attr('associated_gateway_id')
  }

  get associated_gateway_owner_account_id() {
    return this._attr('associated_gateway_owner_account_id')
  }

  get associated_gateway_type() {
    return this._attr('associated_gateway_type')
  }

  get dx_gateway_id() {
    return this._attr('dx_gateway_id')
  }

  get dx_gateway_owner_account_id() {
    return this._attr('dx_gateway_owner_account_id')
  }

  get id() {
    return this._attr('id')
  }

  get vpn_gateway_id() {
    return this._attr('vpn_gateway_id')
  }
}
