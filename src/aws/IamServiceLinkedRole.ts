import {Resource} from '../Resource'

export interface IamServiceLinkedRoleArguments {
  aws_service_name: string
  custom_suffix?: string
  description?: string
  id?: string
}

export interface IamServiceLinkedRoleAttributes {
  arn: string
  aws_service_name: string
  create_date: string
  custom_suffix?: string
  description?: string
  id: string
  name: string
  path: string
  unique_id: string
}

export class IamServiceLinkedRole extends Resource<IamServiceLinkedRoleArguments, IamServiceLinkedRoleAttributes> {
  kind = 'aws_iam_service_linked_role'
  _outputAttrNames = [
    'arn',
    'aws_service_name',
    'create_date',
    'custom_suffix',
    'description',
    'id',
    'name',
    'path',
    'unique_id',
  ] as const
}
