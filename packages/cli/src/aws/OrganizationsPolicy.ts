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
  _kind = 'aws_organizations_policy'

  get arn() {
    return this._attr('arn')
  }

  get content() {
    return this._attr('content')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get type() {
    return this._attr('type')
  }
}
