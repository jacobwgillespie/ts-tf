import {Resource} from '../Resource'

export interface IamGroupArguments {
  id?: string
  name: string
  path?: string
}

export interface IamGroupAttributes {
  arn: string
  id: string
  name: string
  path?: string
  unique_id: string
}

export class IamGroup extends Resource<IamGroupArguments, IamGroupAttributes> {
  _kind = 'aws_iam_group'

  get arn() {
    return this._attr('arn')
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
