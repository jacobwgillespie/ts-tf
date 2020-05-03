import {Resource} from '../Resource'

export interface DynamodbGlobalTableArguments {
  id?: string
  name: string
}

export interface DynamodbGlobalTableAttributes {
  arn: string
  id: string
  name: string
}

export class DynamodbGlobalTable extends Resource<DynamodbGlobalTableArguments, DynamodbGlobalTableAttributes> {
  _kind = 'aws_dynamodb_global_table'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
