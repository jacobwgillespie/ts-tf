import {Resource} from '../Resource'

export interface MacieMemberAccountAssociationArguments {
  id?: string
  member_account_id: string
}

export interface MacieMemberAccountAssociationAttributes {
  id: string
  member_account_id: string
}

export class MacieMemberAccountAssociation extends Resource<
  MacieMemberAccountAssociationArguments,
  MacieMemberAccountAssociationAttributes
> {
  _kind = 'aws_macie_member_account_association'

  get id() {
    return this._attr('id')
  }

  get member_account_id() {
    return this._attr('member_account_id')
  }
}
