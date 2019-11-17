import {Resource} from '../Resource'

export interface GlueConnectionArguments {
  catalog_id?: string
  connection_properties: {[key: string]: string}
  connection_type?: string
  description?: string
  id?: string
  match_criteria?: Array<string>
  name: string
}

export interface GlueConnectionAttributes {
  catalog_id: string
  connection_properties: {[key: string]: string}
  connection_type?: string
  description?: string
  id: string
  match_criteria?: Array<string>
  name: string
}

export class GlueConnection extends Resource<GlueConnectionArguments, GlueConnectionAttributes> {
  kind = 'aws_glue_connection'
  _outputAttrNames = [
    'catalog_id',
    'connection_properties',
    'connection_type',
    'description',
    'id',
    'match_criteria',
    'name',
  ] as const
}
