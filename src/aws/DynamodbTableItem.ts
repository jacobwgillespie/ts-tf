import {Resource} from '../Resource'

export interface DynamodbTableItemArguments {
  hash_key: string
  id?: string
  item: string
  range_key?: string
  table_name: string
}

export interface DynamodbTableItemAttributes {
  hash_key: string
  id: string
  item: string
  range_key?: string
  table_name: string
}

export class DynamodbTableItem extends Resource<DynamodbTableItemArguments, DynamodbTableItemAttributes> {
  kind = 'aws_dynamodb_table_item'
  _outputAttrNames = ['hash_key', 'id', 'item', 'range_key', 'table_name'] as const
}
