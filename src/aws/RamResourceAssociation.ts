import {Resource} from '../Resource'

export interface RamResourceAssociationArguments {
  id?: string
  resource_arn: string
  resource_share_arn: string
}

export interface RamResourceAssociationAttributes {
  id: string
  resource_arn: string
  resource_share_arn: string
}

export class RamResourceAssociation extends Resource<
  RamResourceAssociationArguments,
  RamResourceAssociationAttributes
> {
  kind = 'aws_ram_resource_association'
  _outputAttrNames = ['id', 'resource_arn', 'resource_share_arn'] as const
}
