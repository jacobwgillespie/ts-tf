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
  _kind = 'aws_glue_catalog_table'

  get catalog_id() {
    return this._attr('catalog_id')
  }

  get database_name() {
    return this._attr('database_name')
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

  get owner() {
    return this._attr('owner')
  }

  get parameters() {
    return this._attr('parameters')
  }

  get retention() {
    return this._attr('retention')
  }

  get table_type() {
    return this._attr('table_type')
  }

  get view_expanded_text() {
    return this._attr('view_expanded_text')
  }

  get view_original_text() {
    return this._attr('view_original_text')
  }
}
