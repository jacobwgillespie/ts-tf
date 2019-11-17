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
  kind = 'aws_organizations_organizational_unit'
  _outputAttrNames = ['accounts', 'arn', 'id', 'name', 'parent_id'] as const
}
