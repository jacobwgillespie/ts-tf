import {Resource} from '../Resource'

export interface QuicksightGroupArguments {
  aws_account_id?: string
  description?: string
  group_name: string
  id?: string
  namespace?: string
}

export interface QuicksightGroupAttributes {
  arn: string
  aws_account_id: string
  description?: string
  group_name: string
  id: string
  namespace?: string
}

export class QuicksightGroup extends Resource<QuicksightGroupArguments, QuicksightGroupAttributes> {
  _kind = 'aws_quicksight_group'

  get arn() {
    return this._attr('arn')
  }

  get aws_account_id() {
    return this._attr('aws_account_id')
  }

  get description() {
    return this._attr('description')
  }

  get group_name() {
    return this._attr('group_name')
  }

  get id() {
    return this._attr('id')
  }

  get namespace() {
    return this._attr('namespace')
  }
}
