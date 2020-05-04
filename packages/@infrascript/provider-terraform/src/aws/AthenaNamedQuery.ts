import {Resource} from '../Resource'

export interface AthenaNamedQueryArguments {
  database: string
  description?: string
  id?: string
  name: string
  query: string
  workgroup?: string
}

export interface AthenaNamedQueryAttributes {
  database: string
  description?: string
  id: string
  name: string
  query: string
  workgroup?: string
}

export class AthenaNamedQuery extends Resource<AthenaNamedQueryArguments, AthenaNamedQueryAttributes> {
  _kind = 'aws_athena_named_query'

  get database() {
    return this._attr('database')
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

  get query() {
    return this._attr('query')
  }

  get workgroup() {
    return this._attr('workgroup')
  }
}
