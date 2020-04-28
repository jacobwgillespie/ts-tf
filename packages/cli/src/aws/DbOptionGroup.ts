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
  _kind = 'aws_db_option_group'

  get arn() {
    return this._attr('arn')
  }

  get engine_name() {
    return this._attr('engine_name')
  }

  get id() {
    return this._attr('id')
  }

  get major_engine_version() {
    return this._attr('major_engine_version')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get option_group_description() {
    return this._attr('option_group_description')
  }

  get tags() {
    return this._attr('tags')
  }
}
