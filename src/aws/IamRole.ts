import {Resource} from '../Resource'

export interface IamRoleArguments {
  assume_role_policy: string
  description?: string
  force_detach_policies?: boolean
  id?: string
  max_session_duration?: number
  name?: string
  name_prefix?: string
  path?: string
  permissions_boundary?: string
  tags?: {[key: string]: string}
}

export interface IamRoleAttributes {
  arn: string
  assume_role_policy: string
  create_date: string
  description?: string
  force_detach_policies?: boolean
  id: string
  max_session_duration?: number
  name: string
  name_prefix?: string
  path?: string
  permissions_boundary?: string
  tags?: {[key: string]: string}
  unique_id: string
}

export class IamRole extends Resource<IamRoleArguments, IamRoleAttributes> {
  kind = 'aws_iam_role'
  _outputAttrNames = [
    'arn',
    'assume_role_policy',
    'create_date',
    'description',
    'force_detach_policies',
    'id',
    'max_session_duration',
    'name',
    'name_prefix',
    'path',
    'permissions_boundary',
    'tags',
    'unique_id',
  ] as const
}
