import {Resource} from '../Resource'

export interface DbSecurityGroupArguments {
  description?: string
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface DbSecurityGroupAttributes {
  arn: string
  description?: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class DbSecurityGroup extends Resource<DbSecurityGroupArguments, DbSecurityGroupAttributes> {
  _kind = 'aws_db_security_group'

  get arn() {
    return this._attr('arn')
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

  get tags() {
    return this._attr('tags')
  }
}
