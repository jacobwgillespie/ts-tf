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
  _kind = 'aws_dynamodb_table_item'

  get hash_key() {
    return this._attr('hash_key')
  }

  get id() {
    return this._attr('id')
  }

  get item() {
    return this._attr('item')
  }

  get range_key() {
    return this._attr('range_key')
  }

  get table_name() {
    return this._attr('table_name')
  }
}
