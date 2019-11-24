import {Resource} from '../Resource'

export interface OrganizationsAccountArguments {
  email: string
  iam_user_access_to_billing?: string
  id?: string
  name: string
  parent_id?: string
  role_name?: string
  tags?: {[key: string]: string}
}

export interface OrganizationsAccountAttributes {
  arn: string
  email: string
  iam_user_access_to_billing?: string
  id: string
  joined_method: string
  joined_timestamp: string
  name: string
  parent_id: string
  role_name?: string
  status: string
  tags?: {[key: string]: string}
}

export class OrganizationsAccount extends Resource<OrganizationsAccountArguments, OrganizationsAccountAttributes> {
  _kind = 'aws_organizations_account'

  get arn() {
    return this._attr('arn')
  }

  get email() {
    return this._attr('email')
  }

  get iam_user_access_to_billing() {
    return this._attr('iam_user_access_to_billing')
  }

  get id() {
    return this._attr('id')
  }

  get joined_method() {
    return this._attr('joined_method')
  }

  get joined_timestamp() {
    return this._attr('joined_timestamp')
  }

  get name() {
    return this._attr('name')
  }

  get parent_id() {
    return this._attr('parent_id')
  }

  get role_name() {
    return this._attr('role_name')
  }

  get status() {
    return this._attr('status')
  }

  get tags() {
    return this._attr('tags')
  }
}
