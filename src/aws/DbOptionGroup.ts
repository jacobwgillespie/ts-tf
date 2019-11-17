import {Resource} from '../Resource'

export interface DbOptionGroupArguments {
  engine_name: string
  id?: string
  major_engine_version: string
  name?: string
  name_prefix?: string
  option_group_description?: string
  tags?: {[key: string]: string}
}

export interface DbOptionGroupAttributes {
  arn: string
  engine_name: string
  id: string
  major_engine_version: string
  name: string
  name_prefix: string
  option_group_description?: string
  tags?: {[key: string]: string}
}

export class DbOptionGroup extends Resource<DbOptionGroupArguments, DbOptionGroupAttributes> {
  kind = 'aws_db_option_group'
  _outputAttrNames = [
    'arn',
    'engine_name',
    'id',
    'major_engine_version',
    'name',
    'name_prefix',
    'option_group_description',
    'tags',
  ] as const
}
