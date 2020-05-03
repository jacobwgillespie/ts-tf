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
  _kind = 'aws_iam_service_linked_role'

  get arn() {
    return this._attr('arn')
  }

  get aws_service_name() {
    return this._attr('aws_service_name')
  }

  get create_date() {
    return this._attr('create_date')
  }

  get custom_suffix() {
    return this._attr('custom_suffix')
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

  get path() {
    return this._attr('path')
  }

  get unique_id() {
    return this._attr('unique_id')
  }
}
