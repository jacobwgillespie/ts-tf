import {Resource} from '../Resource'

export interface GlueCatalogTableArguments {
  catalog_id?: string
  database_name: string
  description?: string
  id?: string
  name: string
  owner?: string
  parameters?: {[key: string]: string}
  retention?: number
  table_type?: string
  view_expanded_text?: string
  view_original_text?: string
}

export interface GlueCatalogTableAttributes {
  catalog_id: string
  database_name: string
  description?: string
  id: string
  name: string
  owner?: string
  parameters?: {[key: string]: string}
  retention?: number
  table_type?: string
  view_expanded_text?: string
  view_original_text?: string
}

export class GlueCatalogTable extends Resource<GlueCatalogTableArguments, GlueCatalogTableAttributes> {
  kind = 'aws_glue_catalog_table'
  _outputAttrNames = [
    'catalog_id',
    'database_name',
    'description',
    'id',
    'name',
    'owner',
    'parameters',
    'retention',
    'table_type',
    'view_expanded_text',
    'view_original_text',
  ] as const
}
