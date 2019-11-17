import {Resource} from '../Resource'

export interface OrganizationsPolicyArguments {
  content: string
  description?: string
  id?: string
  name: string
  type?: string
}

export interface OrganizationsPolicyAttributes {
  arn: string
  content: string
  description?: string
  id: string
  name: string
  type?: string
}

export class OrganizationsPolicy extends Resource<OrganizationsPolicyArguments, OrganizationsPolicyAttributes> {
  kind = 'aws_organizations_policy'
  _outputAttrNames = ['arn', 'content', 'description', 'id', 'name', 'type'] as const
}
