import {Resource} from '../Resource'

export interface SsmDocumentArguments {
  content: string
  document_format?: string
  document_type: string
  id?: string
  name: string
  permissions?: {[key: string]: string}
  tags?: {[key: string]: string}
}

export interface SsmDocumentAttributes {
  arn: string
  content: string
  created_date: string
  default_version: string
  description: string
  document_format?: string
  document_type: string
  hash: string
  hash_type: string
  id: string
  latest_version: string
  name: string
  owner: string
  parameter: Array<{default_value: string; description: string; name: string; type: string}>
  permissions?: {[key: string]: string}
  platform_types: Array<string>
  schema_version: string
  status: string
  tags?: {[key: string]: string}
}

export class SsmDocument extends Resource<SsmDocumentArguments, SsmDocumentAttributes> {
  _kind = 'aws_ssm_document'

  get arn() {
    return this._attr('arn')
  }

  get content() {
    return this._attr('content')
  }

  get created_date() {
    return this._attr('created_date')
  }

  get default_version() {
    return this._attr('default_version')
  }

  get description() {
    return this._attr('description')
  }

  get document_format() {
    return this._attr('document_format')
  }

  get document_type() {
    return this._attr('document_type')
  }

  get hash() {
    return this._attr('hash')
  }

  get hash_type() {
    return this._attr('hash_type')
  }

  get id() {
    return this._attr('id')
  }

  get latest_version() {
    return this._attr('latest_version')
  }

  get name() {
    return this._attr('name')
  }

  get owner() {
    return this._attr('owner')
  }

  get parameter() {
    return this._attr('parameter')
  }

  get permissions() {
    return this._attr('permissions')
  }

  get platform_types() {
    return this._attr('platform_types')
  }

  get schema_version() {
    return this._attr('schema_version')
  }

  get status() {
    return this._attr('status')
  }

  get tags() {
    return this._attr('tags')
  }
}
