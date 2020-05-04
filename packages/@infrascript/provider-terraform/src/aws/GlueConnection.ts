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
  _kind = 'aws_glue_connection'

  get catalog_id() {
    return this._attr('catalog_id')
  }

  get connection_properties() {
    return this._attr('connection_properties')
  }

  get connection_type() {
    return this._attr('connection_type')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get match_criteria() {
    return this._attr('match_criteria')
  }

  get name() {
    return this._attr('name')
  }
}
