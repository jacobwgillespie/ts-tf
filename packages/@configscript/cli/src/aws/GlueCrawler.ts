import {Resource} from '../Resource'

export interface GlueCrawlerArguments {
  classifiers?: Array<string>
  configuration?: string
  database_name: string
  description?: string
  id?: string
  name: string
  role: string
  schedule?: string
  security_configuration?: string
  table_prefix?: string
}

export interface GlueCrawlerAttributes {
  arn: string
  classifiers?: Array<string>
  configuration?: string
  database_name: string
  description?: string
  id: string
  name: string
  role: string
  schedule?: string
  security_configuration?: string
  table_prefix?: string
}

export class GlueCrawler extends Resource<GlueCrawlerArguments, GlueCrawlerAttributes> {
  _kind = 'aws_glue_crawler'

  get arn() {
    return this._attr('arn')
  }

  get classifiers() {
    return this._attr('classifiers')
  }

  get configuration() {
    return this._attr('configuration')
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

  get role() {
    return this._attr('role')
  }

  get schedule() {
    return this._attr('schedule')
  }

  get security_configuration() {
    return this._attr('security_configuration')
  }

  get table_prefix() {
    return this._attr('table_prefix')
  }
}
