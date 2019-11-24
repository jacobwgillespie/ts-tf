import {Resource} from '../Resource'

export interface OrganizationsOrganizationalUnitArguments {
  id?: string
  name: string
  parent_id: string
}

export interface OrganizationsOrganizationalUnitAttributes {
  accounts: Array<{arn: string; email: string; id: string; name: string}>
  arn: string
  id: string
  name: string
  parent_id: string
}

export class OrganizationsOrganizationalUnit extends Resource<
  OrganizationsOrganizationalUnitArguments,
  OrganizationsOrganizationalUnitAttributes
> {
  _kind = 'aws_organizations_organizational_unit'

  get accounts() {
    return this._attr('accounts')
  }

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get parent_id() {
    return this._attr('parent_id')
  }
}
