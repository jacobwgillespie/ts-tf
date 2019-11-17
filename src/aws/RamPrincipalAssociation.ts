import {Resource} from '../Resource'

export interface RamPrincipalAssociationArguments {
  id?: string
  principal: string
  resource_share_arn: string
}

export interface RamPrincipalAssociationAttributes {
  id: string
  principal: string
  resource_share_arn: string
}

export class RamPrincipalAssociation extends Resource<
  RamPrincipalAssociationArguments,
  RamPrincipalAssociationAttributes
> {
  kind = 'aws_ram_principal_association'
  _outputAttrNames = ['id', 'principal', 'resource_share_arn'] as const
}
