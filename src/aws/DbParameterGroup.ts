import {Resource} from '../Resource'

export interface DbParameterGroupArguments {
  description?: string
  family: string
  id?: string
  name?: string
  name_prefix?: string
  tags?: {[key: string]: string}
}

export interface DbParameterGroupAttributes {
  arn: string
  description?: string
  family: string
  id: string
  name: string
  name_prefix: string
  tags?: {[key: string]: string}
}

export class DbParameterGroup extends Resource<DbParameterGroupArguments, DbParameterGroupAttributes> {
  kind = 'aws_db_parameter_group'
  _outputAttrNames = ['arn', 'description', 'family', 'id', 'name', 'name_prefix', 'tags'] as const
}
