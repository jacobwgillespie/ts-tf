import {Resource} from '../Resource'

export interface IamInstanceProfileArguments {
  id?: string
  name?: string
  name_prefix?: string
  path?: string
  role?: string
  roles?: Set<string>
}

export interface IamInstanceProfileAttributes {
  arn: string
  create_date: string
  id: string
  name: string
  name_prefix?: string
  path?: string
  role: string
  roles: Set<string>
  unique_id: string
}

export class IamInstanceProfile extends Resource<IamInstanceProfileArguments, IamInstanceProfileAttributes> {
  kind = 'aws_iam_instance_profile'
  _outputAttrNames = ['arn', 'create_date', 'id', 'name', 'name_prefix', 'path', 'role', 'roles', 'unique_id'] as const
}
