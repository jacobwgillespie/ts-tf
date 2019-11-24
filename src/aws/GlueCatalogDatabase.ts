import {Resource} from '../Resource'

export interface GlueCatalogDatabaseArguments {
  catalog_id?: string
  description?: string
  id?: string
  location_uri?: string
  name: string
  parameters?: {[key: string]: string}
}

export interface GlueCatalogDatabaseAttributes {
  catalog_id: string
  description?: string
  id: string
  location_uri?: string
  name: string
  parameters?: {[key: string]: string}
}

export class GlueCatalogDatabase extends Resource<GlueCatalogDatabaseArguments, GlueCatalogDatabaseAttributes> {
  _kind = 'aws_glue_catalog_database'

  get catalog_id() {
    return this._attr('catalog_id')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get location_uri() {
    return this._attr('location_uri')
  }

  get name() {
    return this._attr('name')
  }

  get parameters() {
    return this._attr('parameters')
  }
}
