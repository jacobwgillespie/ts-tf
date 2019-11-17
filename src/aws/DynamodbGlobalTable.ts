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
  kind = 'aws_dynamodb_global_table'
  _outputAttrNames = ['arn', 'id', 'name'] as const
}
