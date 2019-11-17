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
  kind = 'aws_organizations_account'
  _outputAttrNames = [
    'arn',
    'email',
    'iam_user_access_to_billing',
    'id',
    'joined_method',
    'joined_timestamp',
    'name',
    'parent_id',
    'role_name',
    'status',
    'tags',
  ] as const
}
