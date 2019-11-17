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
  kind = 'aws_macie_member_account_association'
  _outputAttrNames = ['id', 'member_account_id'] as const
}
