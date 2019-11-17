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
  kind = 'aws_glue_catalog_database'
  _outputAttrNames = ['catalog_id', 'description', 'id', 'location_uri', 'name', 'parameters'] as const
}
