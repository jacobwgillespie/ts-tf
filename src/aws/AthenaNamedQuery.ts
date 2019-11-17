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
  kind = 'aws_athena_named_query'
  _outputAttrNames = ['database', 'description', 'id', 'name', 'query', 'workgroup'] as const
}
