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
  _kind = 'aws_ram_principal_association'

  get id() {
    return this._attr('id')
  }

  get principal() {
    return this._attr('principal')
  }

  get resource_share_arn() {
    return this._attr('resource_share_arn')
  }
}
