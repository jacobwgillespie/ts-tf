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
  kind = 'aws_glue_crawler'
  _outputAttrNames = [
    'arn',
    'classifiers',
    'configuration',
    'database_name',
    'description',
    'id',
    'name',
    'role',
    'schedule',
    'security_configuration',
    'table_prefix',
  ] as const
}
