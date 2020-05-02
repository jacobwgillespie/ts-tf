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
  _kind = 'aws_ram_resource_association'

  get id() {
    return this._attr('id')
  }

  get resource_arn() {
    return this._attr('resource_arn')
  }

  get resource_share_arn() {
    return this._attr('resource_share_arn')
  }
}
